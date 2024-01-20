"use client";
import Image from "next/image";
import styles from "./styles.module.css";

import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import { SearchIcon } from "../components/Icons/OtherIcons/search";
import Products from "../components/Products";

export default function Loja() {
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
      <title>Loja- Escola de Música Music For All</title>
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

        <div className={`${styles.textContent} animated-item`}>
          <input
            className={styles.serchProducts}
            type="text"
            placeholder="Pesquisar Produtos"
          />
          <span className={styles.search}>
            <SearchIcon />
          </span>
        </div>
        <Products />

        <div className={styles.form}>
          <Form />
        </div>
      </main>
    </>
  );
}
