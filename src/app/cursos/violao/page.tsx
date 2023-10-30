"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import cursoviolao1 from "../../../../public/images/cursoviolao1.png";
import homecursos from "../../../../public/images/homecursos.png"
import homeoficial from "../../../../public/images/homeoficial.png"
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
    <><title>Curso de Violão- Escola de Música Music For All</title>
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
        <div className={styles.cursodeviolao}>
        <h1 className={`${styles.title} animated-item`}>
          Violão 
          </h1>

          <div className={`${styles.textContainer} animated-item`}>
          <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao universo encantador do violão, onde as notas se
              transformam em emoções e os acordes criam histórias musicais
              inesquecíveis. Seja você um iniciante curioso ou um amante da
              música ávido por aprimorar suas habilidades, nosso espaço é o
              lugar perfeito para você!
            </p>

            <h2 className= {`${styles.subtitle} animated-item`}>Por que o violão?</h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Acessibilidade: O violão é um dos instrumentos mais acessíveis
                para iniciantes. Suas cordas macias e agradáveis tornam a
                aprendizagem rápida e gratificante.
              </li>
              <li className="animated-item">
                {" "}
                Versatilidade: Com o violão, você pode tocar uma ampla variedade
                de estilos musicais, desde clássico e folk até pop e rock. As
                possibilidades são infinitas!
              </li>
              <li className="animated-item">
                {" "}
                Benefícios Cognitivos: Estudos mostram que tocar violão estimula
                o cérebro, melhora a concentração e alivia o estresse.
              </li>
              <li className="animated-item">
                {" "}
                Comunidade Musical: Junte-se a uma comunidade apaixonada de
                músicos que compartilham sua paixão pelo violão. Compartilhe
                experiências, dicas e inspirações.{" "}
              </li>
            </ul>

            <h2 className= {`${styles.subtitle} animated-item`}>O que oferecemos:</h2>
            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                Aulas Personalizadas: Nossos instrutores talentosos e
                experientes estão prontos para guiá-lo em sua jornada musical,
                adaptando as aulas ao seu nível e estilo de aprendizado.
              </li>
              <li className="animated-item">
                {" "}
                Repertório Abrangente: Aprenda suas músicas favoritas enquanto
                desenvolve suas habilidades. De clássicos atemporais a hits
                contemporâneos, temos tudo!{" "}
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
              Não perca a oportunidade de desbloquear seu potencial musical. O
              violão está esperando por você para criar sua própria sinfonia.
              Junte-se a nós e comece a sua jornada musical hoje!
            </p>

            <p className={`${styles.apresentacao} animated-item`}>Vamos tocar juntos?</p>
          </div>

          <div className= {`${styles.imageContainer} animated-item`}>
            <Image
             className={`${styles.fotocurso} animated-item`} 
              src={cursoviolao1}
              alt="foto curso de violão"
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
