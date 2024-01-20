"use client";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { StoreProduct } from "../../../../type.d";
import Image from "next/image";
import { CartIcon } from "../Icons/OtherIcons/cartIcon";
import { HeartIcon } from "../Icons/OtherIcons/heart";
const Products = () => {
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
              <span>
                <CartIcon />
              </span>
              <span>
                <HeartIcon />
              </span>
            </div>
          </div>
          <p>{product.title}</p>
          {/* Adicione mais detalhes do produto conforme necessário */}
        </div>
      ))}
    </div>
  );
};

export default Products;
