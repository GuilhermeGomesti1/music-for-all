import Image from "next/image";
import styles from "./styles.module.css";
import FmtPrice from "../FmtPrice";
import { AddIcon } from "../Icons/OtherIcons/add";
import { RemoveIcon } from "../Icons/OtherIcons/remove";

interface Item {
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
  return (
    <div className={styles.divCartProducts}>
      <Image
        className="object-cover"
        width="150"
        height="150"
        src={item.image}
        alt="foto do produto"
      />
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
              <span>
                <AddIcon />
              </span>
              <span className={styles.numberItens}>{item.quantity}</span>
              <span>
                <RemoveIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
