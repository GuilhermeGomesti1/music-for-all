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
      videoId: "hxps_ojn7Gc",
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
    <>
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
                src="https://www.youtube.com/embed/hxps_ojn7Gc?si=g-ioScsAcQr8bxvA"
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
                Fatos interessantes e curiosidades super legais que
                provavelmente você não sabia sobre música
              </h1>
              <Image
                className={styles.video}
                src={curiosidades}
                alt="Music For All Logo"
                width={700}
                height={394}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className="animated-item">
                Poucas atividades estimulam e utilizam praticamente todo o
                cérebro, e música é uma delas.
              </li>

              <li className="animated-item">
                Os arrepios que você começa a sentir quando escuta uma música
                são causados pela liberação de dopamina pelo cérebro,
                antecipando o ápice de uma canção.
              </li>

              <li className="animated-item">
                {" "}
                Estudar música regularmente irá alterar fisicamente sua
                estrutura cerebral. Alterações associadas à aprendizagem ocorrem
                principalmente nas conexões entre os neurônios.
              </li>
              <li className="animated-item">
                O cérebro responde à músicas da mesma forma que responde quando
                você come algo. A dopamina é a substância que permite que uma
                pessoa possa sentir prazeres de tais coisas.
              </li>
            </ul>
          </div>

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula de violão- Trevo(Tu) - Anavitória.
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/9srQ84b4iYw?si=9rhOS_THizW3zizW"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <p className={`${styles.subtitles} animated-item`}>
              Nessa vídeo aula iremos aprender a musica Trevo - tu, da dupla
              AnaVitória, de uma forma bem intuitiva! Vale a pena conferir!{" "}
              <br />
              Mas há um diferencial incrível: se você é parte da nossa
              comunidade musical, terá acesso exclusivo a uma série de aulas que
              vão muito além! Acesso ilimitado a uma biblioteca de vídeo aulas
              exclusivas, tutoriais detalhados para músicas populares e técnicas
              avançadas, e conteúdo personalizado para impulsionar o seu
              progresso musical. <br />
              <Link
                href={loggedIn ? "/alunos" : "/dashboard"}
                className={styles.cliqueaqui}
              >
                Já é aluno? Clique aqui para acessar o conteúdo exclusivo.
              </Link>
            </p>
          </div>
          <CommentComponent videoId="9srQ84b4iYw" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Musicoterapia, o que é?
              </h1>
              <Image
                className={styles.video}
                src={musicoterapia}
                alt="Music For All Logo"
                width={700}
                height={394}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <p className={`${styles.subtitles} animated-item`}>
              Você sabia que a música pode ser usada como método para alívio e
              cura de certas doenças e distúrbios? Para muitas pessoas, a música
              acalma, relaxa o corpo e a mente; proporciona liberdade, sensação
              de alívio e esperança. A musicoterapia é uma forma de terapia que
              utiliza a música e seus elementos para estudar a relação de cada
              indivíduo, proporcionando maior qualidade de vida.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
