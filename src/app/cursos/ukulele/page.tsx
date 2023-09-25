import Image from "next/image";
import styles from "./styles.module.css";
import ukulele from "../../../../public/images/ukulele.png";
import homeoficial from "../../../../public/images/homeoficial.png"
import homecursos from "../../../../public/images/homecursos.png"
import { Form } from "@/app/components/Form";
export default function Cursos() {
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
              />


          <Image
            className={styles.violaoContainer}
            src={homecursos}
            alt="Music For All Logo"
          />
        </div>

        <div className={styles.cursodeukulele}>
          <h1 className={styles.title}>
          Ukulele
          </h1>

          <div className={styles.textContainer}>
            <p className={styles.apresentacao}>
              Bem-vindo ao universo encantador do ukulele, onde as notas são
              como sorrisos e a música é pura alegria. Seja você um iniciante
              curioso ou um amante da música em busca de novas experiências, você
              está no lugar certo!
            </p>

            <h2 className={styles.subtitle}>Por que o ukulele?</h2>

            <ul className={styles.apresentacao}>
              <li>
                {" "}
                Portabilidade: O ukulele é um instrumento compacto e leve,
                perfeito para levar para qualquer lugar e tocar em qualquer
                momento.
              </li>
              <li>
                {" "}
                Facilidade de Aprendizado: Suas cordas macias e acordes simples
                tornam o ukulele acessível até mesmo para iniciantes sem
                experiência musical anterior.
              </li>
              <li>
                {" "}
                Alegria e Diversão: Tocar ukulele é uma experiência alegre e
                divertida, perfeita para relaxar e alegrar o espírito.
              </li>
              <li>
                {" "}
                Comunidade Musical: Faça parte de uma comunidade de entusiastas
                do ukulele que compartilham a paixão por esse instrumento. Troque
                músicas, dicas e histórias.{" "}
              </li>
            </ul>

            <h2 className={styles.subtitle}>O que oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li>
                Aulas Personalizadas: Nossos instrutores experientes estão
                prontos para orientar sua jornada musical, adaptando as aulas ao
                seu nível e estilo de aprendizado.
              </li>
              <li>
                {" "}
                Repertório Variado: Aprenda músicas populares e tradicionais de
                ukulele enquanto desenvolve suas habilidades.
              </li>
              <li>
                {" "}
                Workshops Criativos: Explore técnicas de dedilhado, ritmos,
                improvisação e composição. Liberte sua criatividade musical!
              </li>
              <li>
                Recursos Online: Acesse vídeo aulas, tablaturas, guias práticos
                e muito mais em nossa plataforma online amigável.
              </li>
            </ul>

            <p className={styles.apresentacao}>
              Não perca a oportunidade de descobrir a alegria da música com o
              ukulele. Junte-se a nós e comece sua jornada musical hoje!
            </p>

            <p className={styles.apresentacao}>Vamos tocar juntos?</p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.fotocurso}
              src={ukulele}
              alt="foto curso de ukulele"
            />
          </div>

        <Form/>
        </div>
      </main>
    </>
  );
}
