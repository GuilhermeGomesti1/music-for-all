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

type Product = {
  _id: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  quantity: number;
};

const Products = ({ selectedProduct }: { selectedProduct?: Product }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [showMessageMap, setShowMessageMap] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://apiproducts-vbaz.onrender.com/api/products" // https://apiproducts-vbaz.onrender.com/api/products  "https://fakestoreapiserver.reactbd.com/tech"
        );
        const data = await res.json();
        setProducts(data);
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
    localStorage.setItem("showMessageMap", JSON.stringify(showMessageMap));
  }, [showMessageMap]);

  return (
    <div className={selectedProduct ? styles.productsNoGrid : styles.products}>
      {products
        .filter((product) =>
          selectedProduct
            ? String(product._id) === String(selectedProduct._id)
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
  product: StoreProduct;
  showMessage: boolean;
  setShowMessage: (value: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (process.browser) {
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
        });

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
          title="Clique para saber mais"
          href={`/product/${product._id}?product=${JSON.stringify(product)}`}
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

              setShowMessage(true);
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
            (<FormattedAmount amount={product.oldPrice - product.price} /> de
            desconto)
          </p>
        )}
      </div>
      <hr />

      <div className={styles.divtextCategory}>
        <Link
          title="Clique para saber mais"
          className={styles.goProduct}
          href={`/product/${product._id}?product=${JSON.stringify(product)}`}
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

            setShowMessage(true);
          }}
          className={styles.btnaddcart}
        >
          + carrinho
        </button>
      </div>
    </div>
  );
};

export default Products;
