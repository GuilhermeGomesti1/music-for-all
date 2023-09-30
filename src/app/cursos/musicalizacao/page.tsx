import Image from "next/image";
import styles from "./styles.module.css";
import musicalizacao from "../../../../public/images/musicalizacao.png";

import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";
import homeoficial from "../../../../public/images/homeoficial.png"
import homecursos from "../../../../public/images/homecursos.png"
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
          <h1 className={styles.title}>Curso de Musicalização Infantil</h1>

          <div className={styles.textContainer}>
            <p className={styles.apresentacao}>
              Bem-vindo ao curso de musicalização infantil, onde as crianças
              exploram o mundo da música de forma divertida e educativa. Proporcione
              uma experiência musical enriquecedora para as crianças desde cedo!
            </p>

            <h2 className={styles.subtitle}>Por que a Musicalização Infantil?</h2>

            <ul className={styles.apresentacao}>
              <li>
                {" "}
                Desenvolvimento Cognitivo: A musicalização estimula o
                desenvolvimento cerebral das crianças, melhorando a memória e a
                concentração.
              </li>
              <li>
                {" "}
                Coordenação Motora: As atividades musicais ajudam as crianças a
                desenvolver habilidades motoras finas e grossas.
              </li>
              <li>
                {" "}
                Criatividade: A musicalização incentiva a criatividade das
                crianças, permitindo que elas explorem sons e ritmos de maneira
                única.
              </li>
            </ul>

            <h2 className={styles.subtitle}>O que Oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li>
                Aulas Interativas: Nossos instrutores especializados em
                educação musical infantil oferecem aulas interativas e
                envolventes para estimular o amor pela música desde cedo.
              </li>
              <li>
                {" "}
                Jogos Musicais: As crianças podem aprender de forma lúdica por
                meio de jogos musicais que tornam o aprendizado divertido e
                educativo.
              </li>
              <li>
                {" "}
                Recursos Educativos: Acesso a recursos educativos, como canções
                infantis, instrumentos musicais adaptados e atividades
                criativas.
              </li>
            </ul>

            <p className={styles.apresentacao}>
              Não perca a oportunidade de proporcionar uma experiência musical
              incrível para as crianças. Junte-se a nós e comece essa jornada
              musical desde a infância!
            </p>

            <p className={styles.apresentacao}>Vamos fazer música juntos?</p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.fotocurso}
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
