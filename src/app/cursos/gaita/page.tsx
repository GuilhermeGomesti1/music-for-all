"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import gaita from "../../../../public/images/gaita.png";
import homeoficial from "../../../../public/images/homeoficial.png"
import homecursos from "../../../../public/images/homecursos.png"
import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
export default function Cursos() {



  useEffect(() => {

    if (process.browser) {
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
        <IconWhatsappfixed />

        <div className={styles.cursodegaita}>



          <h1 className={`${styles.title} animated-item`}>
          Gaita
          </h1>

          <div className={`${styles.textContainer} animated-item`}>
            <p className={`${styles.apresentacao} animated-item`}>
              Bem-vindo ao mundo mágico da gaita, onde as notas se transformam
              em harmonia e a música flui como um rio. Seja você um iniciante
              curioso ou um amante da música em busca de novas sonoridades, você
              está no lugar certo!
            </p>

            <h2 className= {`${styles.subtitle} animated-item`}>Por que a gaita?</h2>

            <ul className={`${styles.apresentacao} animated-item`}>
              <li className="animated-item">
                {" "}
                Portabilidade: A gaita é um instrumento compacto e fácil de
                transportar, tornando-a perfeita para tocar em qualquer lugar.
              </li>
              <li  className="animated-item">
                {" "}
                Expressividade: Com a gaita, você pode criar emoções e nuances
                únicas na música.
              </li>
              <li  className="animated-item">
                {" "}
                Versatilidade: Este instrumento pode ser usado em uma variedade
                de estilos musicais, do blues ao folk e além.
              </li>
              <li  className="animated-item">
                {" "}
                Comunidade Musical: Junte-se a outros músicos apaixonados pela
                gaita e compartilhe seu amor pela música.{" "}
              </li >
            </ul>

            <h2 className={styles.subtitle}>O que oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li  className="animated-item">
                Aulas Personalizadas: Nossos instrutores experientes estão
                prontos para guiá-lo em sua jornada musical, adaptando as aulas
                ao seu nível e estilo de aprendizado.
              </li>
              <li  className="animated-item">
                {" "}
                Repertório Diversificado: Aprenda a tocar músicas populares e
                tradicionais na gaita enquanto desenvolve suas habilidades.
              </li>
              <li  className="animated-item">
                {" "}
                Técnicas Avançadas: Explore técnicas avançadas de sopro, bending
                e vibrato para aprimorar suas habilidades musicais.
              </li>
              <li  className="animated-item">
                Recursos Online: Acesse vídeo aulas, partituras, guias práticos
                e muito mais em nossa plataforma online de fácil uso.
              </li>
            </ul>

            <p className={`${styles.apresentacao} animated-item`}>
              Não perca a oportunidade de mergulhar no mundo da música com a
              gaita. Junte-se a nós e comece sua jornada musical hoje!
            </p>

            <p className={`${styles.apresentacao} animated-item`}>Vamos tocar juntos?</p>
          </div>

          <div className= {`${styles.imageContainer} animated-item`}>
            <Image
              className={`${styles.fotocurso} animated-item`} 
              src={gaita}
              alt="foto curso de gaita"
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
