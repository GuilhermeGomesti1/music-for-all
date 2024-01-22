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

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<StoreProduct[]>([]);

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
  });

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
                onClick={() =>
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
                  )
                }
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
                ! Preços
                <FormattedAmount amount={product.oldPrice - product.price} />
              </p>
            )}
          </div>
          <hr />
          <div className={styles.divtextCategory}>
            <p className={styles.pcategory}>{product.category}</p>
            <p className={styles.ptitle}>{product.title}</p>
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
              onClick={() =>
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
                )
              }
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
