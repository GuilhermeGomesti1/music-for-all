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
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
          activateScrollAnimations(); // Ativar animações quando o usuário estiver logado
        } else {
          setLoggedIn(false);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, 2000); // Tempo de carregamento simulado de 2 segundos (você pode ajustar isso)
  }, []);

  function activateScrollAnimations() {
    if (process.browser) {
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
        });

        sr.reveal(".animated-item", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }

  return (
    <div className={styles.main}>
      {loading ? (
        <div className={styles.loading}>
          Carregando...
        </div>
      ) : (
        <div className={styles.main}>
          {loggedIn ? (
            <>
              <main className={styles.main}>
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

                <section className={`${styles.alunosSection}`}>
                  <div className={`${styles.conteudoalunos} animated-item`}>
                    <Link href={"/videoaulas"}>
                      <Image
                        className={styles.imgCursos}
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
                        className={styles.imgCursos}
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
                        className={styles.imgCursos}
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
                        className={styles.imgCursos}
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
                        className={styles.imgCursos}
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
                        className={styles.imgCursos}
                        src={palcovirtual}
                        alt="Imagem do curso"
                        loading="lazy"
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                </section>
              </main>
            </>
          ) : (
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
      )}
    </div>
  );
}