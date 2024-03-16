"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import musicalizacao from "../../../../public/images/musicalizacao.png";

import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";
import homeoficial from "../../../../public/images/homeoficial.png";
import homecursos from "../../../../public/images/homecursos.png";
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
      <title>Curso de Musicalização- Escola de Música Music For All</title>
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
        <div className={styles.cursoDeMusicalizacaoInfantil}>
          <h1 className={`${styles.title} animated-item`}>
            Curso de Musicalização Infantil
          </h1>

          <div className={`${styles.textContainer} animated-item`}>
            <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao curso de musicalização infantil, onde as crianças
              exploram o mundo da música de forma divertida e educativa.
              Proporcione uma experiência musical enriquecedora para as crianças
              desde cedo!
            </p>

            <h2 className={`${styles.subtitle} animated-item`}>
              Por que a Musicalização Infantil?
            </h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Desenvolvimento Cognitivo: A musicalização estimula o
                desenvolvimento cerebral das crianças, melhorando a memória e a
                concentração.
              </li>
              <li className="animated-item">
                {" "}
                Coordenação Motora: As atividades musicais ajudam as crianças a
                desenvolver habilidades motoras finas e grossas.
              </li>
              <li className="animated-item">
                {" "}
                Criatividade: A musicalização incentiva a criatividade das
                crianças, permitindo que elas explorem sons e ritmos de maneira
                única.
              </li>
            </ul>

            <h2 className={`${styles.subtitle} animated-item`}>
              O que Oferecemos:
            </h2>
            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                Aulas Interativas: Nossos instrutores especializados em educação
                musical infantil oferecem aulas interativas e envolventes para
                estimular o amor pela música desde cedo.
              </li>
              <li className="animated-item">
                {" "}
                Jogos Musicais: As crianças podem aprender de forma lúdica por
                meio de jogos musicais que tornam o aprendizado divertido e
                educativo.
              </li>
              <li className="animated-item">
                {" "}
                Recursos Educativos: Acesso a recursos educativos, como canções
                infantis, instrumentos musicais adaptados e atividades
                criativas.
              </li>
            </ul>

            <p className={`${styles.apresentacao} animated-item`}>
              Não perca a oportunidade de proporcionar uma experiência musical
              incrível para as crianças. Junte-se a nós e comece essa jornada
              musical desde a infância!
            </p>

            <p className={`${styles.apresentacao} animated-item`}>
              Vamos fazer música juntos?
            </p>
          </div>

          <div className={`${styles.imageContainer} animated-item`}>
            <Image
              className={`${styles.fotocurso} animated-item`}
              src={musicalizacao}
              alt="Curso de Musicalização Infantil"
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
