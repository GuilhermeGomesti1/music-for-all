import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { StoreProduct } from "../../../../type.d";
import Image from "next/image";
import { CartIcon } from "../Icons/OtherIcons/cartIcon";
import { HeartIcon } from "../Icons/OtherIcons/heart";
import FormattedAmount from "../FmtPrice";
import { useDispatch } from "react-redux";
import { addToCart, addTofavorite, deleteProduct } from "@/store/nextSlice";
import { useSession } from "next-auth/react";
import { CheckIcon } from "../Icons/OtherIcons/check";
import CartPayment from "../CartPayment/page";
import Link from "next/link";
import { CartIconadd } from "../Icons/OtherIcons/carticon1";
import { RemoveProduct } from "../Icons/OtherIcons/removeproduct";

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
  const [page, setPage] = useState<number>(1);
  const productsPerPage = 10;
  const [totalNumberOfProducts, setTotalNumberOfProducts] = useState<number>(0);

  const [showMessageMap, setShowMessageMap] = useState<{
    [key: string]: boolean;
  }>({});

  const loadMoreProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://apiproducts-vbaz.onrender.com/api/products?page=${page}&perPage=${productsPerPage}`
      );
      const data = await res.json();

      if (data.length > 0) {
        setProducts((prevProducts) => {
          const newProducts = data.filter(
            (newProduct: { _id: string }) =>
              !prevProducts.some(
                (existingProduct) => existingProduct._id === newProduct._id
              )
          );
          return [...prevProducts, ...newProducts];
        });
        setPage(page + 1);
      }
      setLoading(false); // Move setLoading inside the if statement
    } catch (error) {
      setLoading(false);
      console.error("Error loading more products:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const bottomOffset = 1400; // Offset de 100 pixels antes do final da página

      if (
        scrollPosition >=
          document.documentElement.offsetHeight - bottomOffset &&
        !loading
      ) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length === 0) {
        try {
          const res = await fetch(
            "https://apiproducts-vbaz.onrender.com/api/products"
          );
          const data = await res.json();

          setProducts(data);
          setTotalNumberOfProducts(data.length);
          setLoading(false);
        } catch (error) {
          setProducts([]);
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, []);

  const removeSpecialChars = (text: string): string => {
    return text.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "");
  };

  return (
    <div className={selectedProduct ? styles.productsNoGrid : styles.products}>
      {products
        .filter((product) =>
          selectedProduct
            ? String(product._id) === String(selectedProduct._id)
            : true
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
            showMessageMap={showMessageMap}
            setShowMessageMap={setShowMessageMap}
          />
        ))}
    </div>
  );
};

const AnimatedProductItem = ({
  product,
  showMessageMap,
  setShowMessageMap,
}: {
  product: Product;
  showMessageMap: { [key: string]: boolean };
  setShowMessageMap: (value: { [key: string]: boolean }) => void;
}) => {
  const dispatch = useDispatch();

  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollReveal = async () => {
      if (typeof window !== "undefined") {
        const ScrollRevealModule = await import("scrollreveal");
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
      }
    };

    handleScrollReveal();

    return () => {
      // Cleanup ScrollReveal
    };
  }, [productRef]);

  const addToCartAndShowMessage = () => {
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
    setShowMessageMap({ ...showMessageMap, [product._id]: true });
  };

  const addToFavorite = () => {
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
    );
  };

  return (
    <div ref={productRef} className={`${styles.listaProducts} animated-item`}>
      <div>
        <Link
          href={`/product/${product._id}?product=${JSON.stringify(product)}`}
        >
          <div className={styles.imageContainer}>
            <Image
              loading="lazy"
              width={300}
              height={300}
              src={product.image}
              className={styles.imgproducts}
              alt="productImage"
            />
          </div>
        </Link>
        <div className={styles.divSpan}>
          <span onClick={addToCartAndShowMessage} className={styles.spanIcons}>
            <CartIcon />
          </span>

          <span onClick={addToFavorite} className={styles.spanIcons}>
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
          {showMessageMap[product._id] && (
            <div className={`${styles.addedToCartMessage} ${styles.show}`}>
              <p>
                <CheckIcon />
                Adicionado!
              </p>
            </div>
          )}
          <p className={styles.pprice}>
            <span className={styles.spanprice}>{product.oldPrice}</span>
            <span>{product.price}</span>
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
          onClick={addToCartAndShowMessage}
          className={`${styles.btnaddcart} ${
            showMessageMap[product._id] && styles.added
          }`}
          disabled={showMessageMap[product._id]}
        >
          <span className={styles.cartText}>
            {showMessageMap[product._id] ? (
              <span className={styles.link}> Adicionado ao carrinho</span>
            ) : (
              "+ Carrinho"
            )}
          </span>
        </button>
        {showMessageMap[product._id] && (
          <button
            onClick={() => {
              const newShowMessageMap = { ...showMessageMap };
              delete newShowMessageMap[product._id];
              setShowMessageMap(newShowMessageMap);
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
