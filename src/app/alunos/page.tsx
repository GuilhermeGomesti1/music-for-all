"use client";
import videoaulas from "../../../public/images/videoaulas.png";
import materiais from "../../../public/images/materiais.png";
import agenda from "../../../public/images/agenda.png";
import forum from "../../../public/images/forum.png";
import pratica from "../../../public/images/pratica.png";
import palcovirtual from "../../../public/images/palcovirtual.png";
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

          <section className= {`${styles.alunosSection} animated-item`}>
            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={videoaulas}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={materiais}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={agenda}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>


            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={forum}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={pratica}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.conteudoalunos} animated-item`}>
              <Link href={"/videoaulas"}>
                <Image
                  className= {`${styles.imgCursos} animated-item`}
                  src={palcovirtual}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

          </section>
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
