"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import homeoficial from "../../../public/images/homeoficial.png"
import homecursos from "../../../public/images/homecursos.png"
import cursoviolao1 from "../../../public/images/cursoviolao1.png";
import piano from "../../../public/images/piano.png";
import guitarra from "../../../public/images/guitarra.png";
import gaita from "../../../public/images/gaita.png";
import ukulele from "../../../public/images/ukulele.png";
import titlecursos2 from "../../../public/images/titlecursos2.png";
import agendaraula from "../../../public/images/agendaraula.png";
import { Form } from "../components/Form";
export default function Cursos() {

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
         
         <div className={styles.titlesection}> <span > Nossos cursos de música são uma sinfonia de excelência e aprendizado. </span></div>

          <section className={styles.cursosSection}>
            
            
            <div className={styles.curso}>
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

            <div className={styles.curso}>
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

            <div className={styles.curso}>
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

            <div className={styles.curso}>
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

            <div className={styles.curso}>
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
          </section>
         
        </div>

        
        <div className={styles.agendar}>
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
              className={styles.agendaraula}
              src={agendaraula}
              alt="Music For All Logo"
              loading="lazy"
                placeholder="blur"
            
            />
          </div>

<div className={styles.formCursos}><Form/></div>

        
      </main>
    </>
  );
}
