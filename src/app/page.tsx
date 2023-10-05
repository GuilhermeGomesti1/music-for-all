"use client";

import Head from "next/head";
import Image from "next/image";
import { IconCursos } from "./components/Icons/iconsHome/iconCursos";
import { IconBlog } from "./components/Icons/iconsHome/iconBlog";
import { IconContact } from "./components/Icons/iconsHome/iconContact";
import { IconCurso } from "./components/Icons/iconsHome/iconCurso";
import { IconWhatsapp } from "./components/Icons/IconsContato/iconWhatsapp";
import { IconInstagram } from "./components/Icons/IconsContato/iconInstagram";
import styles from "./page.module.css";

import homemobile from "../../public/images/homemobile.png";
import homeoficial from "../../public/images/homeoficial.png";
import alunos from "../../public/images/alunos.png";
import Link from "next/link";
import cursoviolao1 from "../../public/images/cursoviolao1.png";
import musicalizacao from "../../public/images/musicalizacao.png";
import piano from "../../public/images/piano.png";
import guitarra from "../../public/images/guitarra.png";
import gaita from "../../public/images/gaita.png";
import ukulele from "../../public/images/ukulele.png";
import titlecursos2 from "../../public/images/titlecursos2.png";
import agendaraulamobile from "../../public/images/agendaraulamobile.png";
import agendaraula from "../../public/images/agendaraula.png";
import { IconYoutube } from "./components/Icons/IconsContato/iconYoutube";
import { IconEmail } from "./components/Icons/IconsContato/iconEmail";
import { IconWhatsappfixed } from "./components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    if (typeof window !== 'undefined') {
      // O código abaixo será executado apenas no navegador
      import('scrollreveal').then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
          // Outras opções de configuração aqui
        });

        sr.reveal('.animated-item', {
          origin: 'bottom',
          distance: '20px',
          easing: 'ease-in-out',
        });
      });
    }
  }, []);

  const mensagemWhatsApp = "Olá, gostaria de agendar uma aula experimental.";

  const redirectToWhatsApp = () => {
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=5531986132070&text=${encodeURIComponent(
      mensagemWhatsApp
    )}`;

    window.open(linkWhatsApp);
  };

  return (
    <>
      <main className={styles.main}>
      <div className={styles.containerHeader}>
          <section className={styles.ctaText1}>
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
                className={styles.imgMobile}
                src={homemobile}
                alt="foto home mobile"
                width={390}
                height={658}
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <li className={styles.itemContato}>
              <IconWhatsappfixed />
            </li>
            <div className={styles.buttonGroup}>
              <Link href={"/cursos"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconCursos />
                  </span>
                  <span className={styles.titleButton}>CURSOS</span>
                  <span className={styles.subtitleButton}>
                    Oferecemos uma ampla gama de aulas de instrumentos, para que
                    você possa escolher o que mais lhe inspira.
                  </span>
                </button>
              </Link>

              <Link href={"/blog"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconBlog />
                  </span>
                  <span className={styles.titleButton}>BLOG</span>
                  <span className={styles.subtitleButton}>
                    Um pouco dos nossos conteúdos! <br />
                    para que vc entenda mais dos nossos métodos.
                  </span>
                </button>
              </Link>

              <Link href={"/contato"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconContact />
                  </span>
                  <span className={styles.titleButton}> CONTATO</span>
                  <span className={styles.subtitleButton}>
                    Fale com a gente! Esclareça suas dúvidas. Agende uma aula
                    experimental!
                  </span>
                </button>
              </Link>
            </div>
            <div className={styles.divSubtitle}>
              <span className={styles.subtitle}>
                Seja você um iniciante apaixonado, um aspirante a virtuose ou
                alguém que deseja apenas explorar os benefícios terapêuticos da
                música, Nossa escola de música é o lugar onde os sonhos musicais
                se transformam em realidade.
              </span>
            </div>
          </section>
        </div>

        <div className={styles.containerTwo}>
        <div className={`${styles.divTitle} animated-item`}>
            <Image
              className={styles.titleCursos}
              src={titlecursos2}
              alt="Titulo  da sessão dois"
              loading="lazy"
              placeholder="blur"
            />

            <span className={styles.spanCursos}>
              {" "}
              ESCOLHA O QUE MAIS LHE INSPIRA!
            </span>
          </div>

          <section className= {`${styles.cursosSection} animated-item`}>
            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/violao"}>
                <Image
                  className={styles.imgCursos}
                  src={cursoviolao1}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/piano"}>
                <Image
                  className={styles.imgCursos}
                  src={piano}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/guitarra"}>
                <Image
                  className={styles.imgCursos}
                  src={guitarra}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/gaita"}>
                <Image
                  className={styles.imgCursos}
                  src={gaita}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/ukulele"}>
                <Image
                  className={styles.imgCursos}
                  src={ukulele}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href="/cursos/musicalizacao">
                <Image
                  className={styles.imgCursos}
                  src={musicalizacao}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>
          </section>
          <p className={`${styles.textoCursos} animated-item`}>
           OFERECEMOS UMA AMPLA GAMA DE CURSOS QUE ABRAÇAM A DIVERDIDADE DA MÚSICA.
          </p>
        </div>

        <div className={styles.containerThree}>
          <div className={`${styles.agendar} animated-item`}>
            <button
              className={styles.buttonPresencial}
              onClick={redirectToWhatsApp}
            >
              Presencial
            </button>

            <button
              className={styles.buttonOnline}
              onClick={redirectToWhatsApp}
            >
              Online
            </button>
            <Image
              className={`${styles.agendaraula} animated-item`}  
              src={agendaraula}
              alt="Music For All Logo"
              loading="lazy"
              placeholder="blur"
            />
          </div>

          <div className= {`${styles.agendarMobile} animated-item`}>
            <Image
              className={styles.imgMobile}
              src={agendaraulamobile}
              alt="foto home mobile"
              width={390}
              height={382}
              loading="lazy"
              placeholder="blur"
            />

            <button
              className={styles.buttonPresencialmobile}
              onClick={redirectToWhatsApp}
            >
              Presencial
            </button>

            <button
              className={styles.buttonOnlinemobile}
              onClick={redirectToWhatsApp}
            >
              Online
            </button>
          </div>

          <h1 className={`${styles.title3} animated-item`} >Por que Escolher a Music For All? </h1>   
          <section className={styles.ctaText}>
            <div className={`${styles.imgcontainer} animated-item`} > 
              <Image
                className={styles.img2}
                src={alunos}
                alt="Music For All Logo"
                loading="lazy"
              />
            </div>

            <div className={`${styles.divLista} animated-item`} > 
              <ul className={styles.lista}>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Educação Personalizada
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Variedade de Instrumentos
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Aulas para Todas as Idades
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Atmosfera de Apoio
                </li>
                <li className={styles.item}>
                  <IconCurso />
                  Atuações e Eventos
                </li>
              </ul>
            </div>

            <div className={`${styles.contatos} animated-item`} > 
              <ul className={`${styles.contatosList} animated-item`} >
                <li className={`${styles.itemContato} animated-item`} >
                  <IconInstagram />
                </li>
                <li className={`${styles.itemContato} animated-item`} >
                  <IconYoutube />
                </li>
              </ul>

              <ul className={`${styles.contatosList} animated-item`} >
                <a
                  href="https://api.whatsapp.com/send?phone=5531986132070"
                  target="_black"
                >
                  <li className={`${styles.itemContato} animated-item`} >
                    <IconWhatsapp />
                  </li>
                </a>
                <li className={`${styles.itemContato} animated-item`} >
                  <a href="mailto:escolamusicforall@gmail.com">
                    <IconEmail />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
