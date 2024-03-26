"use client";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
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
import Link from "next/link";
import { CartIconadd } from "../Icons/OtherIcons/carticon1";

import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
import { RemoveProduct } from "../Icons/OtherIcons/removeproduct";

type Product = StoreProduct;

const Products = ({
  searchTerm,
  selectedProduct,
  categoryFilter,
}: {
  searchTerm: string;
  selectedProduct?: Product;
  categoryFilter?: string;
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [showMessageMap, setShowMessageMap] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://apiproducts-vbaz.onrender.com/api/products"
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const storedShowMessageMap = JSON.parse(
      localStorage.getItem("showMessageMap") || "{}"
    );
    setShowMessageMap(storedShowMessageMap);
  }, []);

  useEffect(() => {
    localStorage.setItem("showMessageMap", JSON.stringify(showMessageMap));
  }, [showMessageMap]);

  const removeSpecialChars = (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "");
  };

  return (
    <div className={selectedProduct ? styles.productsNoGrid : styles.products}>
      {products
        .filter((product) =>
          selectedProduct ? product._id === selectedProduct._id : true
        )
        .filter(
          (product) =>
            !searchTerm ||
            searchTerm.trim() === "" ||
            removeSpecialChars(product.title.toLowerCase()).includes(
              removeSpecialChars(searchTerm.toLowerCase())
            ) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((product) =>
          categoryFilter
            ? removeSpecialChars(product.category.toLowerCase()).includes(
                removeSpecialChars(categoryFilter.toLowerCase())
              )
            : true
        )
        .map((product) => (
          <AnimatedProductItem
            key={product._id}
            product={product}
            showMessage={showMessageMap[product._id]}
            setShowMessage={(value) =>
              setShowMessageMap((prev) => ({ ...prev, [product._id]: value }))
            }
          />
        ))}
    </div>
  );
};

const AnimatedProductItem = ({
  product,
  showMessage,
  setShowMessage,
}: {
  product: Product;
  showMessage: boolean;
  setShowMessage: (value: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (process.browser) {
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;
        const sr = ScrollReveal({ duration: 1000, reset: false });
        if (productRef.current) {
          sr.reveal(productRef.current, {
            origin: "bottom",
            distance: "20px",
            easing: "ease-in-out",
          });
        }
      });
    }
  }, [productRef]);

  return (
    <div ref={productRef} className={`${styles.listaProducts} animated-item`}>
      <div>
        <Link
          href={`/product/${product._id}?product=${JSON.stringify(product)}`}
          className={styles.link} // Add link class
        >
          <div className={styles.imageContainer}>
            <Image
              width={300}
              height={300}
              src={product.image}
              className={styles.imgproducts}
              alt="productImage"
            />
          </div>
        </Link>
        <div className={styles.divSpan}>
          <span
            onClick={() => {
              dispatch(addToCart({ ...product, quantity: 1 })); // Adicionando apenas 1 item
              setShowMessage(true);
            }}
            className={styles.spanIcons}
          >
            <CartIcon />
          </span>
          <span
            onClick={() => {
              dispatch(addTofavorite(product));
            }}
            className={styles.spanIcons}
          >
            <HeartIcon />
          </span>
        </div>
        {product.isNew && (
          <p className={styles.textpreço}>
            (<FormattedAmount amount={product.oldPrice - product.price} /> de
            desconto)
          </p>
        )}
      </div>
      <hr />
      <div className={styles.divtextCategory}>
        <Link
          href={`/product/${product._id}?product=${JSON.stringify(product)}`}
          className={styles.goProduct} // Add goProduct class
        >
          <p className={styles.pcategory}>{product.category}</p>
          <p className={styles.ptitle}>
            {product.title.length > 30 ? (
              <span className={styles.ptitle}>
                {product.title.substring(0, 30)}
                <span className={styles.threeDot}>{"..."}</span>
              </span>
            ) : (
              product.title
            )}
          </p>
          {showMessage && (
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
            {product.description.length > 120 ? (
              <span>
                {product.description.substring(0, 100)}
                <span className={styles.threeDot}>{"..."}</span>
              </span>
            ) : (
              product.description
            )}
          </p>
        </Link>
        <button
          onClick={() => {
            dispatch(addToCart({ ...product, quantity: 1 })); // Adicionando apenas 1 item
            setShowMessage(true);
          }}
          className={`${styles.btnaddcart} ${showMessage && styles.added}`}
          disabled={showMessage}
        >
          <span className={styles.cartText}>
            {showMessage ? (
              <span className={styles.link}> Adicionado ao carrinho</span>
            ) : (
              "+ Carrinho"
            )}
          </span>
        </button>
        {showMessage && (
          <button
            onClick={() => {
              setShowMessage(false);
              dispatch(deleteProduct(product._id));
            }}
            className={styles.removeButton}
          >
            <RemoveProduct />
            Remover
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
