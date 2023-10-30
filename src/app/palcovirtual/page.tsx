"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import facapartemobile from "../../../public/images/facapartemobile.png";
import curiosidades from "../../../public/images/curiosidades.png";
import musicoterapia from "../../../public/images/musicoterapia.png";
import facaparte from "../../../public/images/facaparte.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { VerticalMenu } from "../components/VerticalMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import CommentComponent from "../components/FormComentarios";

export default function Blog() {
  const videodata = [
    {
      title: " Oh! Darling - Canção dos Beatles interpretada por Iolanda Martins de Souza e Josiano Miranda de Souza",
      videoId: "515LzJBC4ko",
    }, 

    {
      title: "  Até o fim- Canção de Engenheiros do Hawaii interpretada por João Vitor Moscon e João Lucas.",
      videoId: "_7NyyVXwbUg",
    },
    {
      title: "Aula de violão- Trevo(Tu) - Anavitória.",
      videoId: "9srQ84b4iYw",
    },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <><title>Palco Virtual- Escola de Música Music For All</title>
      <main className={styles.contentAll}>
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
        <VerticalMenu />
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

        <div className={`${styles.principal} animated-item`}>
          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
              Oh! Darling - Canção dos Beatles interpretada por Iolanda Martins de Souza e Josiano Miranda de Souza
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/515LzJBC4ko?si=z_B-2njP2MQ5LRkA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className={`${styles.subtitles} animated-item`}>
            Uma belíssima apresentação interpretada em família! (Pai e filha).
            </p>
          </div>
          <CommentComponent videoId="hxps_ojn7Gc" />   




          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
              Até o fim- Canção de Engenheiros do Hawaii interpretada por João Vitor Moscon e João Lucas.
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/_7NyyVXwbUg?si=TsgG36TBgswMXBWa" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className={`${styles.subtitles} animated-item`}>
            Esses garotos brilham! Alunos mais que especiais, juntamente com o professor Guilherme Gomes na gaita e Artur Neoman na bateria.

            </p>
          </div>
          <CommentComponent videoId="_7NyyVXwbUg" /> 

         
          </div>
        
      </main>
    </>
  );
}
