"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import guitarra from "../../../../public/images/guitarra.png";
import homeoficial from "../../../../public/images/homeoficial.png";
import homecursos from "../../../../public/images/homecursos.png";
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
    <> <title>Curso de Guitarra- Escola de Música Music For All</title>
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

        <div className={styles.cursodeguitarra}>
        <h1 className={`${styles.title} animated-item`}>Guitarra</h1>

          <div className={`${styles.textContainer} animated-item`}>
            <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao mundo envolvente da guitarra, onde os acordes se
              transformam em melodia e a música é uma forma de expressão
              infinita. Seja você um iniciante entusiasta ou um amante da música
              que busca aprimorar suas habilidades, você está no lugar certo!
            </p>

            <h2 className={styles.subtitle}>Por que a guitarra?</h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Versatilidade: A guitarra oferece uma ampla variedade de estilos
                musicais para explorar, desde o rock e blues até o jazz e o
                folk.
              </li>
              <li className="animated-item">
                {" "}
                Expressividade: Com a guitarra, você pode transmitir emoções e
                criar sua própria música de forma única.
              </li>
              <li className="animated-item">
                {" "}
                Benefícios Cognitivos: Tocar guitarra estimula o cérebro,
                melhora a coordenação e alivia o estresse.
              </li>
              <li className="animated-item">
                {" "}
                Comunidade Musical: Junte-se a uma comunidade de músicos
                apaixonados pela guitarra. Compartilhe experiências, dicas e
                inspirações.{" "}
              </li>
            </ul>

            <h2 className={styles.subtitle}>O que oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li className="animated-item">
                Aulas Personalizadas: Nossos instrutores talentosos e
                experientes estão prontos para guiá-lo em sua jornada musical,
                adaptando as aulas ao seu nível e estilo de aprendizado.
              </li>
              <li className="animated-item">
                {" "}
                Repertório Diversificado: Aprenda suas músicas favoritas
                enquanto desenvolve suas habilidades. De clássicos atemporais a
                músicas contemporâneas, temos tudo!{" "}
              </li>
              <li className="animated-item">
                {" "}
                Workshops Criativos: Explore técnicas avançadas, improvisação e
                composição. Liberte sua criatividade musical!
              </li>
              <li className="animated-item">
                Recursos Online: Acesse vídeo aulas, partituras, guias práticos
                e muito mais em nossa plataforma online de fácil uso.
              </li>
            </ul>

            <p className={`${styles.apresentacao} animated-item`}>
              Não perca a oportunidade de desbloquear seu potencial musical com
              a guitarra. Junte-se a nós e comece sua jornada musical hoje!
            </p>
            <p className={`${styles.apresentacao} animated-item`}>
              Vamos tocar juntos?
            </p>
          </div>

          <div className= {`${styles.imageContainer} animated-item`}>
            <Image
             className={`${styles.fotocurso} animated-item`} 
              src={guitarra}
              alt="foto curso de guitarra"
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
