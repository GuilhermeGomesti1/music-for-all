"use client";

import Image from "next/image";
import facapartemobile from "../../../public/images/facapartemobile.png";
import facaparte from "../../../public/images/facaparte.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Alunos() {


  useEffect(() => {
    if (typeof window !== "undefined") {
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



  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado, atualize a variável de estado
        setLoggedIn(true);
      } else {
        // O usuário não está autenticado, mantenha a variável de estado como falsa
        setLoggedIn(false);
      }
    });

    // Certifique-se de cancelar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loggedIn ? (
        // Conteúdo exclusivo para alunos autenticados
        <>
          <div>
            <Image
              className={styles.facaparte}
              src={facaparte}
              alt="foto dos alunos"
              width={1833}
              height={911}
              loading="lazy"
              placeholder="blur"
            />
          </div>

          <div className={styles.imgMobile}>
            <Image
              className={styles.imgMobile}
              src={facapartemobile}
              alt="foto home mobile"
              width={390}
              height={658}
              loading="lazy"
              placeholder="blur"
            />
          </div>

          <IconWhatsappfixed />


          <div className={styles.containerAulas}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
               Vídeo Aulas
              </h1>
              <iframe
                className={`${styles.video} animated-item`}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/9srQ84b4iYw?si=zXsgwHrYPNuZ42q2" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className={`${styles.subtitles} animated-item`}>
              Observar a performance de nossos alunos é uma experiência
              verdadeiramente inspiradora, e isso nos lembra de um importante
              aspecto da jornada musical: o talento é algo que merece ser
              nutrido e cultivado. Ele não é apenas uma habilidade, mas um
              presente especial que deve ser compartilhado com o mundo. É com
              grande honra que fazemos parte deste processo de crescimento como
              músicos, junto com cada um de nossos alunos{" "}
            </p>
          </div>
        </>
      ) : (
        // Mensagem de login e link para a página de login
        <div>
          <strong>Faça o login para ter acesso</strong>
          <Link href="/dashboard" passHref>
            <button className={styles.buttons}>
              <span className={styles.iconButton}></span>
              <span className={styles.titleButton}>Aluno</span>
              <span className={styles.subtitleButton}>
                Clique aqui para acessar o seu conteúdo exclusivo!
              </span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
