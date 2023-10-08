"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import facapartemobile from "../../../public/images/facapartemobile.png";
import curiosidades from "../../../public/images/curiosidades.png";
import videosiniciantes from "../../../public/images/videosiniciantes.png";
import facaparte from "../../../public/images/facaparte.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { VerticalMenu } from "../components/VerticalMenu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { IconCurso } from "../components/Icons/iconsHome/iconCurso";

export default function VideoAulas() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={styles.contentAll}>
        <div>
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
        <VerticalMenu />
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

        <div className={`${styles.principal} animated-item`}>
          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula de violão- Trevo(Tu) - Anavitória. Dedilhado e acordes
                simplificados.
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/9srQ84b4iYw?si=wOKsTaaL4rp0PAMt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nessa vídeo aula iremos aprender a musica Trevo - tu, da dupla
                AnaVitória, de uma forma bem intuitiva! Vale a pena conferir!
              </li>

              <li className={`${styles.liitem} animated-item`}>
                1&apos;13&quot; Aprendendo o dedilhado
              </li>

              <li className={`${styles.liitem} animated-item`}>
                3&apos;15&quot;Primeira parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                8&apos;24&quot;tocando junto com a música
              </li>
              <li className={`${styles.liitem} animated-item`}>
                9&apos;43&quot; Acordes da segunda parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                11&apos;20&quot; Batida da segunda parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                12&apos;37&quot; sequência dos acordes da 2• parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                14&apos; tocando junto com a música (2• parte)
              </li>
              <li className={`${styles.liitem} animated-item`}>
                15&apos;08&quot; Música completa + tablatura do dedilhado +
                sequência dos acordes
              </li>
            </ul>
          </div>

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                O segredo das pestanas!
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/7tnZ0PDQiQo?si=OTXanccXtEhjtu3V"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                {" "}
                <IconCurso />
                Nessa vídeo aula iremos abordar todos os pontos fundamentais
                para uma boa execução das pestanas!
              </li>
            </ul>
          </div>

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Na Hora de Amar - Gusttavo Lima: Aula de Violão Completa
                (Tablatura + Cifra)
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/X7sVhhhvBIA?si=U7y-nJAQx5b0nfv_"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nessa vídeo aula vamos aprender a música Na hora de amar, do
                Gusttavo Lima.
              </li>
            </ul>
          </div>

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula de violão- Trevo(Tu) - Anavitória. Dedilhado e acordes
                simplificados.
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/9srQ84b4iYw?si=wOKsTaaL4rp0PAMt"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                {" "}
                <IconCurso />
                Nessa vídeo aula iremos aprender a musica Trevo - tu, da dupla
                AnaVitória, de uma forma bem intuitiva! Vale a pena conferir!
              </li>

              <li className={`${styles.liitem} animated-item`}>
                {" "}
                1&apos;13&quot; Aprendendo o dedilhado
              </li>

              <li className={`${styles.liitem} animated-item`}>
                3&apos;15&quot;Primeira parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                8&apos;24&quot;tocando junto com a música
              </li>
              <li className={`${styles.liitem} animated-item`}>
                9&apos;43&quot; Acordes da segunda parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                11&apos;20&quot; Batida da segunda parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                12&apos;37&quot; sequência dos acordes da 2• parte
              </li>
              <li className={`${styles.liitem} animated-item`}>
                14&apos; tocando junto com a música (2• parte)
              </li>
              <li className={`${styles.liitem} animated-item`}>
                15&apos;08&quot; Música completa + tablatura do dedilhado +
                sequência dos acordes
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            className={`${styles.imginiciantes} animated-item`}
            src={videosiniciantes}
            alt="foto dos alunos"
            width={1900}
            height={300}
            loading="lazy"
            placeholder="blur"
          />
          <h1 className={styles.titlecursoiniciantes}>
            Curso de Violão para Iniciantes: Aprenda a Tocar Violão do Zero
          </h1>
        </div>
        <div className={`${styles.principal} animated-item`}>
          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
              Introdução ao Violão: Aula 1
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/Zx2CNDwrFxk?si=OjcP3AsQj84JkVfI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta primeira aula do curso de violão para iniciantes, o
                professor Guilherme Gomes da Music for All irá ensinar você
                sobre:
              </li>
              <li className={`${styles.liitem} animated-item`}>
                A estrutura do violão e suas partes fundamentais. As seis cordas
                do violão e suas diferenças.{" "}
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Como ler tablaturas e entender os números nas casas.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                A postura correta da mão esquerda ao tocar. Uma prática inicial
                com a música Parabéns para Você.
              </li>
            </ul>
          </div>

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Introdução ao Violão: Aula 2
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/dctbKoDyaSE?si=KZn8oR4hCrkU1XiV"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta segunda aula de violão, você aprenderá:{" "}
              </li>
              <li className={`${styles.liitem} animated-item`}>
                As músicas Asa Branca e Ode à Alegria de Beethoven usando as
                duas primeiras cordas do violão.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Dicas para estudar, incluindo copiar a tablatura.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Demonstração das músicas no ritmo normal e mais lento. Dicas
                finais: assista à primeira aula se tiver dúvidas na leitura da
                tablatura, leia da esquerda para a direita e pratique
                acompanhando o vídeo.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Agradecemos por assistir à nossa segunda aula de violão! Se você
                gostou deste conteúdo e deseja continuar aprimorando suas
                habilidades musicais, não esqueça de se inscrever no nosso canal
                e ativar as notificações para não perder nenhuma aula futura.
                Sua participação é muito importante para nós. Até a próxima!
              </li>
            </ul>
          </div>


          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Introdução ao Violão: Aula 3
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/YcOgNlEW_m4?si=CxBv-vOXjIRXcjal" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta terceira aula de violão, você aprenderá:
              </li>
              <li className={`${styles.liitem} animated-item`}>
              Aprender os primeiros acordes no violão e aprimorar sua técnica.
              </li>
              <li className={`${styles.liitem} animated-item`}>
              Praticar a transição entre os acordes para ganhar agilidade.
              </li>
              <li className={`${styles.liitem} animated-item`}>
              Trabalhe na mudança entre eles, usando um exercício de agilidade.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Agradecemos por assistir à nossa segunda aula de violão! Se você
                gostou deste conteúdo e deseja continuar aprimorando suas
                habilidades musicais, não esqueça de se inscrever no nosso canal
                e ativar as notificações para não perder nenhuma aula futura.
                Sua participação é muito importante para nós. Até a próxima!
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
