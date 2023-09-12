import Head from "next/head";
import Image from "next/image";
import { IconCursos } from "./components/Icons/iconsHome/iconCursos";
import { IconBlog } from "./components/Icons/iconsHome/iconBlog";
import { IconContact } from "./components/Icons/iconsHome/iconContact";
import { IconCurso } from "./components/Icons/iconsHome/iconCurso";
import { IconWhatsapp } from "./components/Icons/IconsContato/iconWhatsapp";
import { IconInstagram } from "./components/Icons/IconsContato/iconInstagram";
import styles from "./page.module.css";
import home from "../../public/images/home.png";
import alunos from "../../public/images/alunos.png";
import Link from "next/link";
import cursoviolao1 from "../../public/images/cursoviolao1.png";
import piano from "../../public/images/piano.png";
import guitarra from "../../public/images/guitarra.png";
import gaita from "../../public/images/gaita.png";
import ukulele from "../../public/images/ukulele.png";
import titlecursos2 from "../../public/images/titlecursos2.png";
import agendaraula from "../../public/images/agendaraula.png";
import { IconYoutube } from "./components/Icons/IconsContato/iconYoutube";
import { IconEmail } from "./components/Icons/IconsContato/iconEmail";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText1}>
            <h1 className={styles.title}>Bem vindo à</h1>
            <div>
              <Image
                className={styles.img}
                src={home}
                alt="Music For All Logo"
              />
            </div>
            <h2 className={styles.slogan}>
              Na Music for All, acreditamos que a música é a linguagem universal
              que une corações e almas.
            </h2>

            <div className={styles.buttonGroup}>
              <Link href={"/cursos"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconCursos />
                  </span>
                  <span className={styles.titleButton}>CURSOS</span>
                  <span className={styles.subtitleButton}>
                    Oferecemos uma ampla gama de aulas de instrumentos, para que
                    você possa escolher o que mais lhe inspira.
                  </span>
                </button>
              </Link>

              <Link href={"/blog"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconBlog />
                  </span>
                  <span className={styles.titleButton}>BLOG</span>
                  <span className={styles.subtitleButton}>
                    Um pouco dos nossos conteúdos! <br />
                    para que vc entenda mais dos nossos métodos.
                  </span>
                </button>
              </Link>

              <Link href={"/contato"} className={styles.buttonContainer}>
                <button className={styles.buttons}>
                  <span className={styles.iconButton}>
                    <IconContact />
                  </span>
                  <span className={styles.titleButton}> CONTATO</span>
                  <span className={styles.subtitleButton}>
                    Fale com a gente! Esclareça suas dúvidas. Agende uma aula
                    experimental!
                  </span>
                </button>
              </Link>
            </div>
            <div className={styles.divSubtitle}>
              <span className={styles.subtitle}>
                Seja você um iniciante apaixonado, um aspirante a virtuose ou
                alguém que deseja apenas explorar os benefícios terapêuticos da
                música, Nossa escola de música é o lugar onde os sonhos musicais
                se transformam em realidade.
              </span>
            </div>
          </section>
        </div>

        <div className={styles.containerTwo}>
          <div className={styles.divTitle}>
            <Image
              className={styles.titleCursos}
              src={titlecursos2}
              alt="Titulo  da sessão dois"
            />

            <span className={styles.spanCursos}>
              {" "}
              ESCOLHA O QUE MAIS LHE INSPIRA!
            </span>
          </div>

          <section className={styles.cursosSection}>
            <div className={styles.curso}>
              <Link href={"/violao"}>
                <Image
                  className={styles.imgCursos}
                  src={cursoviolao1}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/pianoeteclado"}>
                <Image
                  className={styles.imgCursos}
                  src={piano}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/guitarra"}>
                <Image
                  className={styles.imgCursos}
                  src={guitarra}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/gaita"}>
                <Image
                  className={styles.imgCursos}
                  src={gaita}
                  alt="Imagem do curso"
                />
              </Link>
            </div>

            <div className={styles.curso}>
              <Link href={"/ukulele"}>
                <Image
                  className={styles.imgCursos}
                  src={ukulele}
                  alt="Imagem do curso"
                />
              </Link>
            </div>
          </section>
          <p className={styles.textoCursos}>
            Oferecemos uma ampla gama de cursos que abraçam a diversidade da
            música.
          </p>
        </div>

        <div className={styles.containerThree}>
          <div className={styles.agendar}>
            <button className={styles.buttonPresencial}>Presencial</button>

            <button className={styles.buttonOnline}>Online</button>
            <Image
              className={styles.agendaraula}
              src={agendaraula}
              alt="Music For All Logo"
            />
          </div>

          <h1 className={styles.title3}>Por que Escolher a Music for All?</h1>
          <section className={styles.ctaText}>
            <div className={styles.imgcontainer}>
              <Image
                className={styles.img2}
                src={alunos}
                alt="Music For All Logo"
              />
            </div>

            <div className={styles.divLista}>
              <ul className={styles.lista}>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Educação Personalizada
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Variedade de Instrumentos
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Aulas para Todas as Idades
                </li>
                <li className={styles.item}>
                  {" "}
                  <IconCurso />
                  Atmosfera de Apoio
                </li>
                <li className={styles.item}>
                  <IconCurso />
                  Atuações e Eventos
                </li>
              </ul>
            </div>

            <div className={styles.contatos}>
             

              <ul className={styles.contatosList}>
               
                <li className={styles.itemContato}>
                  <IconInstagram /> Instagram
                </li>
                <li className={styles.itemContato}>
                  <IconYoutube /> Nosso canal!
                </li>
              </ul>

              
              <ul className={styles.contatosList}>
                <li className={styles.itemContato}>
                  <IconWhatsapp /> (31)986132070
                </li>
                <li className={styles.itemContato}>
                  <IconEmail /> escolamusicforall@gmail.com
                </li>
              </ul>
            </div>



          </section>



          <h3 className={styles.subtitulo3}>
            Junte-se a Nós na Jornada Musical!
          </h3>

          <p className={styles.paragrafo}>
            Na Music for All, acreditamos que a música está ao alcance de todos.
            Deixe-nos guiá-lo através das maravilhas da música e ajudá-lo a
            descobrir seu potencial musical único. Explore nossos cursos,
            conheça nossos instrutores e mergulhe na magia da música. Sua
            jornada musical começa aqui, na Music for All.
          </p>
        </div>
      </main>
    </>
  );
}
