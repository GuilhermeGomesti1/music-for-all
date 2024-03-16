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
import Dashboard from "../dashboard/page";
import CommentComponent from "../components/FormComentarios";
import ScrollToTop from "../components/scrooltotop";

export default function VideoAulas() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [commentText, setCommentText] = useState("");

  const videodata = [
    {
      title:
        "Aula de violão- Trevo(Tu) - Anavitória. Dedilhado e acordes simplificados.",
      videoId: "9srQ84b4iYw",
    },
    {
      title: "O segredo das pestanas!",
      videoId: "7tnZ0PDQiQo",
    },
    {
      title:
        "Na Hora de Amar - Gusttavo Lima: Aula de Violão Completa (Tablatura + Cifra)",
      videoId: "X7sVhhhvBIA",
    },

    {
      title: "Introdução ao Violão: Aula 1",
      videoId: "Zx2CNDwrFxk",
    },
    {
      title:
        "Aula 2 - Introdução ao Violão: Aprenda a Tocar Asa Branca e Ode à Alegria",
      videoId: "dctbKoDyaSE",
    },
    {
      title: "Aula 3 - Introdução ao Violão: Aprenda Acordes e Ritmo",
      videoId: "YcOgNlEW_m4",
    },
    {
      title:
        "Aula 4 - Violão para Iniciantes: Dominando Ritmo e Técnica de Acordes no Violão",
      videoId: "cE9JmC8sek0",
    },
    {
      title:
        "Aula 5 - Violão para Iniciantes: Novos Acordes e Ritmo: Desafio e Exercício para Melhorar",
      videoId: "nEVdoKrCfdY",
    },
    {
      title: "Aula 6 - Violão para Iniciantes: Dominando Pestanas e Acordes",
      videoId: "cdYnzs21L_I",
    },
    {
      title:
        "Aula 7 - Violão para Iniciantes: O Segredo para Aprender Todos os Acordes e Pestanas do Violão com uma Lógica Simples",
      videoId: "iRIZa-oMWSE",
    },
    {
      title:
        "Aula 8 - Violão para Iniciantes: Introdução e Prática de Dedilhado",
      videoId: "tLG7jkOeiG8",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
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

  // Verifica se o usuário está logado antes de renderizar o conteúdo
  if (!loggedIn) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <title>Vídeo Aulas- Escola de Música Music For All</title>
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
          <CommentComponent videoId="9srQ84b4iYw" />

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
          <CommentComponent videoId="7tnZ0PDQiQo" />
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
          <CommentComponent videoId="X7sVhhhvBIA" />
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
          <CommentComponent videoId="Zx2CNDwrFxk" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 2 - Introdução ao Violão: Aprenda a Tocar Asa Branca e Ode
                à Alegria
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
          <CommentComponent videoId="dctbKoDyaSE" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 3 - Introdução ao Violão: Aprenda Acordes e Ritmo
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
                Trabalhe na mudança entre eles, usando um exercício de
                agilidade.
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
          <CommentComponent videoId="YcOgNlEW_m4" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 4 - Violão para Iniciantes: Dominando Ritmo e Técnica de
                Acordes no Violão
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/cE9JmC8sek0?si=SD01ifjHtGoAPjbq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Na quarta aula do nosso curso de violão, você vai:
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Aprender a trabalhar com ritmo suave e ágil.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Dominar o espaçamento e a batida do ritmo.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Seguir quatro passos para aprimorar sua técnica de acordes.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Compartilhamento de um exemplo de batida com a música Por Onde
                Andei do Nando Reis.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Estímulo para estudar e praticar essa batida.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Continue praticando para melhorar suas habilidades musicais. Não
                se esqueça de se inscrever e acompanhar nossas lições. Até a
                próxima aula!
              </li>
            </ul>
          </div>
          <CommentComponent videoId="cE9JmC8sek0" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 5 - Violão para Iniciantes: Novos Acordes e Ritmo: Desafio
                e Exercício para Melhorar
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/nEVdoKrCfdY?si=Z9Dd6l1JTvDFla1l"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Na quinta aula do nosso curso de violão, você vai:
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Aprender dois novos acordes.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Dominar um novo ritmo para suas músicas.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Aplicar esses acordes e ritmo em Parabéns para você e Proibida
                pra Mim.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Continue praticando para aprimorar suas habilidades musicais.
                Não se esqueça de se inscrever e acompanhar nossas lições. Até a
                próxima aula!
              </li>
            </ul>
          </div>
          <CommentComponent videoId="nEVdoKrCfdY" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 6 - Violão para Iniciantes: Dominando Pestanas e Acordes
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/cdYnzs21L_I?si=pUKfdU_f-nTe0BOM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta sexta aula do nosso curso de violão para iniciantes, você
                vai:
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Aprender a manter a postura correta para tocar acordes com
                pestanas.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Fortalecer sua mão com um exercício específico.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Dominar os acordes necessários e praticando pestanas para tocar
                a música Velha Infância dos Tribalistas.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Continue praticando e aprimorando suas habilidades musicais. Não
                se esqueça de se inscrever e acompanhar nossas lições. Até a
                próxima aula!
              </li>
            </ul>
          </div>
          <CommentComponent videoId="cdYnzs21L_I" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 7 - Violão para Iniciantes: O Segredo para Aprender Todos
                os Acordes e Pestanas do Violão com uma Lógica Simples
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/iRIZa-oMWSE?si=CK5rKyHPG0NckfaN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta sétima aula do nosso curso de violão, você vai:
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Descobrir as Pestanas Superiores.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Entender as Pestanas Inferiores.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Aprender a fazer todos os acordes maiores e menores do violão
                através de uma lógica simples.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Compreender a lógica por trás da escala cromática no violão.
              </li>
              <li className={`${styles.liitem} animated-item`}>
                Continue praticando e aprimorando suas habilidades musicais. Não
                se esqueça de se inscrever e acompanhar nossas lições. Até a
                próxima aula!
              </li>
            </ul>
          </div>
          <CommentComponent videoId="iRIZa-oMWSE" />

          <div className={`${styles.videoAndText} animated-item`}>
            <div className={`${styles.divvideo} animated-item`}>
              <h1 className={`${styles.titles} animated-item`}>
                Aula 8 - Violão para Iniciantes: Aula 8 - Introdução e Prática
                de Dedilhado
              </h1>
              <iframe
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/tLG7jkOeiG8?si=QXhTvpIJDcqJIcoN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <ul className={`${styles.subtitles} animated-item`}>
              <li className={`${styles.lititle} animated-item`}>
                <IconCurso />
                Nesta aula, vamos introduzir um exercício prático de dedilhado
                que é fácil de executar e produz um som agradável.
              </li>
            </ul>
          </div>
          <CommentComponent videoId="tLG7jkOeiG8" />
        </div>
      </main>
    </>
  );
}
