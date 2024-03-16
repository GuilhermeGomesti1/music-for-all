"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import violao from "../../../../public/images/violao.png";
import piano from "../../../../public/images/piano.png";
import homeoficial from "../../../../public/images/homeoficial.png";
import homecursos from "../../../../public/images/homecursos.png";
import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import ScrollToTop from "@/app/components/scrooltotop";
export default function Cursos() {
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
      <title>Curso de Piano e teclado- Escola de Música Music For All</title>
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
        <IconWhatsappfixed />
        <div className={styles.cursodepiano}>
          <h1 className={`${styles.title} animated-item`}>Piano e Teclado</h1>

          <div className={`${styles.textContainer} animated-item`}>
            <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao universo mágico do piano e teclado, onde as notas
              fluem como poesia e a música ganha vida. Se você é um iniciante
              curioso ou um amante da música em busca de aprimoramento, você
              está no lugar certo!
            </p>

            <h2 className={`${styles.subtitle} animated-item`}>
              Por que o piano e teclado?
            </h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Versatilidade: O piano e teclado oferecem uma ampla gama de sons
                e estilos musicais para explorar, desde clássico até pop e
                eletrônico.
              </li>
              <li className="animated-item">
                {" "}
                Expressividade: Esses instrumentos permitem que você transmita
                emoções de forma única por meio da música.
              </li>
              <li className="animated-item">
                {" "}
                Benefícios Cognitivos: Aprender piano e teclado estimula o
                cérebro, aprimora a memória e aumenta a concentração.
              </li>
              <li className="animated-item">
                {" "}
                Comunidade Musical: Faça parte de uma comunidade de músicos
                apaixonados pelo piano e teclado. Compartilhe experiências,
                dicas e inspirações.{" "}
              </li>
            </ul>

            <h2 className={`${styles.subtitle} animated-item`}>
              O que oferecemos:
            </h2>
            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                Aulas Personalizadas: Nossos instrutores talentosos e
                experientes estão prontos para orientar sua jornada musical,
                adaptando as aulas ao seu nível e estilo de aprendizado.
              </li>
              <li className="animated-item">
                {" "}
                Repertório Diversificado: Aprenda suas músicas favoritas
                enquanto aprimora suas habilidades. Do clássico ao
                contemporâneo, temos um vasto repertório!{" "}
              </li>
              <li className="animated-item">
                {" "}
                Workshops Criativos: Explore técnicas avançadas, improvisação e
                composição. Desperte sua criatividade musical!
              </li>
              <li className="animated-item">
                Recursos Online: Tenha acesso a videoaulas, partituras, guias
                práticos e muito mais em nossa plataforma online de fácil uso.
              </li>
            </ul>

            <p className={`${styles.apresentacao} animated-item`}>
              Não perca a oportunidade de desbloquear seu potencial musical com
              o piano e teclado. Junte-se a nós e comece sua jornada musical
              hoje!
            </p>

            <p className={`${styles.apresentacao} animated-item`}>
              Vamos tocar juntos?
            </p>
          </div>

          <div className={`${styles.imageContainer} animated-item`}>
            <Image
              className={`${styles.fotocurso} animated-item`}
              src={piano}
              alt="foto curso de violão"
              loading="lazy"
              placeholder="blur"
            />
          </div>

          <Form />
        </div>
      </main>
    </>
  );
}
