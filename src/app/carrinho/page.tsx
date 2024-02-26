"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Item } from "../components/CartProducts";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../../type.d";
import { CartProducts } from "../components/CartProducts";
import ResetCart from "../components/ResetCart";
import Link from "next/link";
import CartPayment from "../components/CartPayment/page";
import SigninButton from "../components/signinGoogle/signinButton";
interface StoreProduct {
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
  brand: string;
  _id: number;
  // Outras propriedades do produto
  userId: string | null;
}

const mapStoreProductToItem = (storeProduct: StoreProduct): Item => {
  return {
    brand: storeProduct.brand,
    category: storeProduct.category,
    description: storeProduct.description,
    image: storeProduct.image,
    isNew: "", // Adicione o valor apropriado se necessário
    oldPrice: 0, // Adicione o valor apropriado se necessário
    price: storeProduct.price,
    title: storeProduct.title,
    _id: storeProduct._id,
    quantity: storeProduct.quantity,
  };
};

export default function Carrinho() {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const userCartItems: StoreProduct[] = productData.filter(
    (item: StoreProduct) => item.userId === userInfo
  );

  useEffect(() => {
    if (process.browser) {
      // O código abaixo será executado apenas no navegador
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
          // Outras opções de configuração aqui
        });

        sr.reveal(".animated-item", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <>
      <title>Carrinho- Escola de Música Music For All</title>
      <main className={styles.main}>
        <div>
          <Image
            className={styles.img}
            src={homeoficial}
            alt="Music For All Logo"
            width={1833}
            height={598}
            quality={100}
            placeholder="blur"
            loading="lazy"
          />
        </div>

        <div>
          <Image
            className={styles.violaoContainer}
            src={homecursos}
            alt="Music For All Logo"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <IconWhatsappfixed />

        <div className={styles.cartmain}>
          {productData.length > 0 ? (
            <>
              <div className={styles.minhasCompras}>
                <div className={styles.compras}>
                  <p className={`${styles.title} animated-item`}>
                    Lista de compras
                  </p>
                  <p className={`${styles.title} animated-item`}></p>
                </div>

                <div className={styles.carrinho}>
                  {userCartItems.map((storeProduct: StoreProduct) => (
                    <div key={storeProduct._id}>
                      <CartProducts
                        item={mapStoreProductToItem(storeProduct)}
                      />
                    </div>
                  ))}
                  <ResetCart />
                </div>
              </div>

              <div className={styles.products}>
                <CartPayment />
              </div>
            </>
          ) : (
            <div className={styles.vazio}>
              <h1 className={styles.text}>Seu carrinho está vazio!</h1>
              <Link href={"/loja"}>
                <button className={styles.buttonVoltar}>
                  Voltar as compras
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
