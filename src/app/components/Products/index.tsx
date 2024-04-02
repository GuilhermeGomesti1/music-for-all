"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart, addTofavorite, deleteProduct } from "@/store/nextSlice";
import Image from "next/image";
import Link from "next/link";
import { RemoveProduct } from "../Icons/OtherIcons/removeproduct";
import { CheckIcon } from "../Icons/OtherIcons/check";
import FormattedAmount from "../FmtPrice";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
import { CartIcon } from "../Icons/OtherIcons/cartIcon";
import { HeartIcon } from "../Icons/OtherIcons/heart";
import { StoreProduct } from "../../../../type.d";
import SkeletonProduct from "../SkeletonProduct";
import SkeletonErrorProduct from "../SkeletonError";
import router, { useRouter } from "next/router";
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
  const [scrollActivated, setScrollActivated] = useState<boolean>(false);

  useEffect(() => {
    const handleHashScroll = () => {
      setTimeout(() => {
        const hash = window.location.hash;

        if (hash && !scrollActivated) {
          // Verificar se o scroll já foi ativado
          const element = document.getElementById(hash.substring(1));

          if (element) {
            const scrollOffset = -80;
            const elementPosition = element.offsetTop + scrollOffset;
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });
            setScrollActivated(true); // Ativar o scroll
          }
        }
      }, 100);
    };
    handleHashScroll();
  }, [scrollActivated]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const cachedProducts = localStorage.getItem("products");
        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts));
          setLoading(false);
        } else {
          const res = await fetch(
            "https://apiproducts.vercel.app/api/products"
          );
          const data = await res.json();
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data));
          setLoading(false);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (process.browser) {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default || module;
        const sr = ScrollReveal({ duration: 600, reset: false });
        sr.reveal(`.${styles.listaProducts}`, {
          origin: "bottom",
          distance: "5px",
          easing: "ease-in-out",
        });
      });
    }
  }, [products]);
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

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setShowMessageMap((prev) => ({ ...prev, [product._id]: true }));
  };

  const handleAddToFavorites = (product: Product) => {
    dispatch(addTofavorite(product));
  };

  const handleRemoveProduct = (product: Product) => {
    setShowMessageMap((prev) => ({ ...prev, [product._id]: false }));
    dispatch(deleteProduct(product._id));
  };

  return (
    <div className={selectedProduct ? styles.productsNoGrid : styles.products}>
      {loading ? (
        <>
          {[
            ...Array(
              selectedProduct ? 1 : categoryFilter ? products.length : 8
            ),
          ].map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
        </>
      ) : products.length > 0 ? (
        products
          .filter(
            (product) =>
              !searchTerm ||
              searchTerm.trim() === "" ||
              removeSpecialChars(product.title.toLowerCase()).includes(
                removeSpecialChars(searchTerm.toLowerCase())
              ) ||
              product.category
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .filter(
            (product) =>
              !categoryFilter ||
              removeSpecialChars(product.category.toLowerCase()).includes(
                removeSpecialChars(categoryFilter.toLowerCase())
              )
          )
          .map((product) => (
            <div
              key={product._id}
              id={product._id.toString()}
              className={`${styles.listaProducts} ${
                loading ? styles.loading : ""
              }`}
            >
              <Link
                href={`/product/${product._id}?product=${JSON.stringify(
                  product
                )}`}
                className={styles.link}
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
                  onClick={() => handleAddToCart(product)}
                  className={styles.spanIcons}
                >
                  <CartIcon />
                </span>
                <span
                  onClick={() => handleAddToFavorites(product)}
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
              <hr />
              <div className={styles.divtextCategory}>
                <Link
                  href={`/product/${product._id}?product=${JSON.stringify(
                    product
                  )}`}
                  className={styles.goProduct}
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
                  {showMessageMap[product._id] && (
                    <div
                      className={`${styles.addedToCartMessage} ${styles.show}`}
                    >
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
                    {product.description.length > 100 ? (
                      <span>
                        {product.description.substring(0, 90)}
                        <span className={styles.threeDot}>{"..."}</span>
                      </span>
                    ) : (
                      product.description
                    )}
                  </p>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`${styles.btnaddcart} ${
                    showMessageMap[product._id] && styles.added
                  }`}
                  disabled={showMessageMap[product._id]}
                >
                  <span className={styles.cartText}>
                    {showMessageMap[product._id] ? (
                      <span className={styles.link}>
                        {" "}
                        Adicionado ao carrinho
                      </span>
                    ) : (
                      "+ Carrinho"
                    )}
                  </span>
                </button>
                {showMessageMap[product._id] && (
                  <button
                    onClick={() => handleRemoveProduct(product)}
                    className={styles.removeButton}
                  >
                    <RemoveProduct />
                    Remover
                  </button>
                )}
              </div>
            </div>
          ))
      ) : (
        <>
          {[...Array(4)].map((_, index) => (
            <SkeletonErrorProduct key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
