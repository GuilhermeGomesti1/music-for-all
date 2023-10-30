"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import ukulele from "../../../../public/images/ukulele.png";
import homeoficial from "../../../../public/images/homeoficial.png"
import homecursos from "../../../../public/images/homecursos.png"
import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
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
    <><title>Curso de Ukulele- Escola de Música Music For All</title>
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
        <div className={styles.cursodeukulele}>
        <h1 className={`${styles.title} animated-item`}>
          Ukulele
          </h1>

          <div className={`${styles.textContainer} animated-item`}>
          <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao universo encantador do ukulele, onde as notas são
              como sorrisos e a música é pura alegria. Seja você um iniciante
              curioso ou um amante da música em busca de novas experiências, você
              está no lugar certo!
            </p>

            <h2 className= {`${styles.subtitle} animated-item`}>Por que o ukulele?</h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Portabilidade: O ukulele é um instrumento compacto e leve,
                perfeito para levar para qualquer lugar e tocar em qualquer
                momento.
              </li>
              <li className="animated-item">
                {" "}
                Facilidade de Aprendizado: Suas cordas macias e acordes simples
                tornam o ukulele acessível até mesmo para iniciantes sem
                experiência musical anterior.
              </li>
              <li className="animated-item">
                {" "}
                Alegria e Diversão: Tocar ukulele é uma experiência alegre e
                divertida, perfeita para relaxar e alegrar o espírito.
              </li>
              <li className="animated-item">
                {" "}
                Comunidade Musical: Faça parte de uma comunidade de entusiastas
                do ukulele que compartilham a paixão por esse instrumento. Troque
                músicas, dicas e histórias.{" "}
              </li>
            </ul>

            <h2 className= {`${styles.subtitle} animated-item`}>O que oferecemos:</h2>
            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                Aulas Personalizadas: Nossos instrutores experientes estão
                prontos para orientar sua jornada musical, adaptando as aulas ao
                seu nível e estilo de aprendizado.
              </li>
              <li className="animated-item">
                {" "}
                Repertório Variado: Aprenda músicas populares e tradicionais de
                ukulele enquanto desenvolve suas habilidades.
              </li>
              <li className="animated-item">
                {" "}
                Workshops Criativos: Explore técnicas de dedilhado, ritmos,
                improvisação e composição. Liberte sua criatividade musical!
              </li>
              <li className="animated-item">
                Recursos Online: Acesse vídeo aulas, tablaturas, guias práticos
                e muito mais em nossa plataforma online amigável.
              </li>
            </ul>

            <p className={`${styles.apresentacao} animated-item`}>
              Não perca a oportunidade de descobrir a alegria da música com o
              ukulele. Junte-se a nós e comece sua jornada musical hoje!
            </p>

            <p className={`${styles.apresentacao} animated-item`}>Vamos tocar juntos?</p>
          </div>

          <div className= {`${styles.imageContainer} animated-item`}>
            <Image
               className={`${styles.fotocurso} animated-item`} 
              src={ukulele}
              alt="foto curso de ukulele"
              loading="lazy"
              placeholder="blur"
            />
          </div>

        <Form/>
        </div>
      </main>
    </>
  );
}
