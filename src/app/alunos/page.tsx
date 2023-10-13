"use client";
import videoaulas from "../../../public/images/videoaulas.png";
import materiais from "../../../public/images/materiais.png";
import agenda from "../../../public/images/agenda.png";
import forum from "../../../public/images/forum.png";
import pratica from "../../../public/images/pratica.png";
import palcovirtual from "../../../public/images/palcovirtual.png";
import home from "../../../public/images/homeoficial.png"
import areaalunomobile from "../../../public/images/areaalunomobile.png"
import Image from "next/image";
import facapartemobile from "../../../public/images/facapartemobile.png";
import facaparte from "../../../public/images/facaparte.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import styles from "./styles.module.css";
import Dashboard from "../dashboard/page";


export default function Alunos() {
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

  useEffect(() => {
    if (loggedIn && process.browser) {
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
  }, [loggedIn]);

  return (
    <div className={styles.main}>
      {loggedIn ? (
        // Conteúdo exclusivo para alunos autenticados
        <main>
          <div className={styles.main}>
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
          

          <div className= {`${styles.description} animated-item`}>

         
            <h1 className={`${styles.titledescription} animated-item`}>Sua área de Desempenho</h1>  
            <span className={`${styles.spandescription} animated-item`}>
            Bem-vindo à nossa Área de Desempenho exclusiva para alunos! Este é o espaço onde nossos alunos têm acesso a recursos e ferramentas essenciais para aprimorar suas habilidades musicais. Aqui, você encontrará uma série de recursos personalizados para aprimorar sua jornada musical
            </span>
          </div>
          <section className={`${styles.alunosSection} animated-item`}>
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
              <Link href={"/materiais"}>
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
      ) : (
        // Mensagem de login e link para a página de login
      <Dashboard/>
      )}
    </div>
  );
}
