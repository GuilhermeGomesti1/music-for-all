import Image from "next/image";
import styles from "./styles.module.css";
import FmtPrice from "../FmtPrice";
import { AddIcon } from "../Icons/OtherIcons/add";
import { RemoveIcon } from "../Icons/OtherIcons/remove";
import { RemoveProduct } from "../Icons/OtherIcons/removeproduct";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
export interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: string;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface CartProductsProps {
  item: Item;
}

export function CartProducts({ item }: CartProductsProps) {
  const usedispatch = useDispatch();
  return (
    <div className={styles.divCartProducts}>
      <div>
        <Image
          className={styles.imgProduct}
          width="150"
          height="150"
          src={item.image}
          alt="foto do produto"
        />
      </div>
      <div className={styles.allproducts}>
        <div className={styles.products}>
          <p className={styles.titleproduct}>{item.title} </p>
          <p className={styles.descriptionproduct}>{item.description} </p>
          <p className={styles.descriptionproduct}>
            Preço{" "}
            <span className={styles.price}>
              <FmtPrice amount={item.price} />
            </span>
          </p>

          <div className={styles.addAndRemove}>
            <div className={styles.divaddandremove}>
              <span
                onClick={() => {
                  usedispatch(
                    increaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  );
                }}
              >
                <AddIcon />
              </span>
              <span className={styles.numberItens}>{item.quantity}</span>
              <span
                onClick={() => {
                  usedispatch(
                    decreaseQuantity({
                      _id: item._id,
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      quantity: 1,
                    })
                  );
                }}
              >
                <RemoveIcon />
              </span>
            </div>
          </div>
          <div
            onClick={() => {
              usedispatch(deleteProduct(item._id));

              // Remova a mensagem associada ao produto do Local Storage
              const storedShowMessageMap = JSON.parse(
                localStorage.getItem("showMessageMap") || "{}"
              );
              delete storedShowMessageMap[item._id];
              localStorage.setItem(
                "showMessageMap",
                JSON.stringify(storedShowMessageMap)
              );
            }}
            className={styles.divremoveproduct}
          >
            <RemoveProduct /> Remover
          </div>
        </div>
        <div className={styles.priceSell}>
          <FmtPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
}
