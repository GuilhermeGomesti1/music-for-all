"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import cursoviolao1 from "../../../public/images/cursoviolao1.png";
import musicalizacao from "../../../public/images/musicalizacao.png";
import piano from "../../../public/images/piano.png";
import guitarra from "../../../public/images/guitarra.png";
import gaita from "../../../public/images/gaita.png";
import ukulele from "../../../public/images/ukulele.png";
import titlecursos2 from "../../../public/images/titlecursos2.png";
import agendaraula from "../../../public/images/agendaraula.png";
import agendaraulamobile from "../../../public/images/agendaraulamobile.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";




export default function Cursos() {
  useEffect(() => {
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
      <main>
        <div className={styles.containerViolao}>
          <Image
            className={styles.img}
            src={homeoficial}
            alt="Music For All Logo"
            width={1895}
            height={598}
            quality={100}
            loading="lazy"
            placeholder="blur"
          />

          <Image
            className={styles.violaoContainer}
            src={homecursos}
            alt="Music For All Logo"
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <div className={styles.containerTwo}>
          <div className={styles.divTitle}>
            <Image
              className={`${styles.titleCursos} animated-item`}
              src={titlecursos2}
              alt="Titulo  da sessão dois"
              loading="lazy"
              placeholder="blur"
            />

            <span className={`${styles.spanCursos} animated-item`}>
           
              ESCOLHA O QUE MAIS LHE INSPIRA!
            </span>
          </div>
          <IconWhatsappfixed />

          <div className={`${styles.titlesection} animated-item`} > 
            
            <span>
             
              Nossos cursos de música são uma sinfonia de excelência e
              aprendizado.
            </span>
          </div>

          <section className={`${styles.cursosSection} animated-item`} > 
            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/violao"}>
                <Image
                  className={`${styles.imgCursos} animated-item`}
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
                  className={`${styles.imgCursos} animated-item`}
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
                  className={`${styles.imgCursos} animated-item`}
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
                  className={`${styles.imgCursos} animated-item`}
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
                  className={`${styles.imgCursos} animated-item`}
                  src={ukulele}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>

            <div className={`${styles.curso} animated-item`}>
              <Link href={"/cursos/musicalizacao"}>
                <Image
                  className={`${styles.imgCursos} animated-item`}
                  src={musicalizacao}
                  alt="Imagem do curso"
                  loading="lazy"
                  placeholder="blur"
                />
              </Link>
            </div>
          </section>
        </div>

        <div className={`${styles.agendar} animated-item`}>
          <button
            className={styles.buttonPresencial}
            onClick={redirectToWhatsApp}
          >
            Presencial
          </button>

          <button className={styles.buttonOnline} onClick={redirectToWhatsApp}>
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

        <div className={`${styles.agendarMobile} animated-item`}>
          <Image
            className={`${styles.imgMobile} animated-item`}
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

        <div className={styles.formCursos}>
          <Form />
        </div>
      </main>
    </>
  );
}
