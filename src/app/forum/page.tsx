"use client";
import Image from "next/image";
import styles from "./styles.module.css";

import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import ScrollToTop from "../components/scrooltotop";

export default function Contato() {
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
      <ScrollToTop />
      <title>Forum- Escola de Música Music For All</title>
      <main>
        <div>
          <Image
            className={styles.img}
            src={homeoficial}
            alt="Music For All Logo"
            width={1895}
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
          <h1 className={`${styles.title} animated-item`}>
            Página em construção!
          </h1>
          <p className={styles.descricaoconstucao}>
            Estamos dedicados a aprimorar todas as funcionalidades do nosso
            site! Atualmente, estamos em pleno processo de construção, mas
            estamos trabalhando incansavelmente para proporcionar a melhor
            experiência possível em breve. Aguarde ansiosamente por todas as
            novidades que estamos preparando para você
          </p>
        </div>

        <div className={`${styles.divLista} animated-item`}>
          <span className={styles.itens}>Telefone:</span>
          <p className={styles.item}>(31)986132070</p>
          <span className={styles.itens}>E-mail:</span>
          <p className={styles.item}>escolamusicforall@gmail.com</p>
          <span className={styles.itens}>Endereço:</span>
          <p className={styles.item}>
            Avenida. Wilson Alvarenga, 1140 – Carneirinhos Cep: 35930-001 – João
            Monlevade/ MG – Brasil
          </p>
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </main>
    </>
  );
}
