"use client";
import Image from "next/image";
import styles from "./styles.module.css";

import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../type.d";
import { CartProducts } from "../components/CartProducts";
import ResetCart from "../components/ResetCart";
import Link from "next/link";
import CartPayment from "../components/CartPayment";

export default function Carrinho() {
  const { productData } = useSelector((state: StateProps) => state.next);

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
      <main>
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
                  <p className={`${styles.title} animated-item`}>Subtitulo</p>
                </div>

                <div className={styles.carrinho}>
                  {productData.map((item: StoreProduct) => (
                    <div key={item._id}>
                      <CartProducts item={item} />
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
