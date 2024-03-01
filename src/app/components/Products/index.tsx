"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { StoreProduct } from "../../../../type.d";
import Image from "next/image";
import { CartIcon } from "../Icons/OtherIcons/cartIcon";
import { HeartIcon } from "../Icons/OtherIcons/heart";
import FormattedAmount from "../FmtPrice";
import { useDispatch } from "react-redux";
import { addToCart, addTofavorite } from "@/store/nextSlice";
import { useSession } from "next-auth/react";
import { CheckIcon } from "../Icons/OtherIcons/check";
import CartPayment from "../CartPayment/page";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [showMessageMap, setShowMessageMap] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
        const data = await res.json();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    // Recuperar os dados do Local Storage ao carregar a página
    const storedShowMessageMap = JSON.parse(
      localStorage.getItem("showMessageMap") || "{}"
    );
    setShowMessageMap(storedShowMessageMap);
  }, []);
  useEffect(() => {
    // Salvar os dados no Local Storage sempre que showMessageMap for atualizado
    localStorage.setItem("showMessageMap", JSON.stringify(showMessageMap));
  }, [showMessageMap]);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product._id} className={styles.listaProducts}>
          <div>
            <Image
              width={300}
              height={300}
              src={product.image}
              className={styles.imgproducts}
              alt="productImage"
            />

            <div className={styles.divSpan}>
              <span
                onClick={() => {
                  dispatch(
                    addToCart({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  );

                  setShowMessageMap((prevShowMessageMap) => ({
                    ...prevShowMessageMap,
                    [product._id]: true,
                  }));
                }}
                className={styles.spanIcons}
              >
                <CartIcon />
              </span>

              <span
                onClick={() =>
                  dispatch(
                    addTofavorite({
                      _id: product._id,
                      brand: product.brand,
                      category: product.category,
                      description: product.description,
                      image: product.image,
                      isNew: product.isNew,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      title: product.title,
                      quantity: 1,
                    })
                  )
                }
                className={styles.spanIcons}
              >
                <HeartIcon />
              </span>
            </div>

            {product.isNew && (
              <p className={styles.textpreço}>
                (<FormattedAmount amount={product.oldPrice - product.price} />{" "}
                de desconto)
              </p>
            )}
          </div>
          <hr />
          <div className={styles.divtextCategory}>
            <p className={styles.pcategory}>{product.category}</p>
            <p className={styles.ptitle}>{product.title}</p>
            {showMessageMap[product._id] && (
              <div className={`${styles.addedToCartMessage} ${styles.show}`}>
                <p>
                  <CheckIcon />
                  Adicionado!
                </p>
              </div>
            )}
            <p className={styles.pprice}>
              <span className={styles.spanprice}>
                <FormattedAmount amount={product.oldPrice} />
              </span>
              <span>
                <FormattedAmount amount={product.price} />
              </span>
            </p>
            <p className={styles.pdescription}>
              {product.description.substring(0, 120)}
            </p>

            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: product._id,
                    brand: product.brand,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    isNew: product.isNew,
                    oldPrice: product.oldPrice,
                    price: product.price,
                    title: product.title,
                    quantity: 1,
                  })
                );

                setShowMessageMap((prevShowMessageMap) => ({
                  ...prevShowMessageMap,
                  [product._id]: true,
                }));
              }}
              className={styles.btnaddcart}
            >
              + carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
