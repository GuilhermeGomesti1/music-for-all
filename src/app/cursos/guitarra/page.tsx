
import Image from "next/image";
import styles from "./styles.module.css";
import guitarra from "../../../../public/images/guitarra.png";
import homeoficial from "../../../../public/images/homeoficial.png"
import homecursos from "../../../../public/images/homecursos.png"
import { Form } from "@/app/components/Form";
import { IconWhatsappfixed } from "@/app/components/Icons/IconsContato/iconWhatsappfixed";

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
  
          <div className={styles.cursodeguitarra}>
            <h1 className={styles.title}>
              Guitarra
            </h1>
  
            <div className={styles.textContainer}>
              <p className={styles.apresentacao}>
                Bem-vindo ao mundo envolvente da guitarra, onde os acordes se
                transformam em melodia e a música é uma forma de expressão
                infinita. Seja você um iniciante entusiasta ou um amante da
                música que busca aprimorar suas habilidades, você está no lugar
                certo!
              </p>
  
              <h2 className={styles.subtitle}>Por que a guitarra?</h2>
  
              <ul className={styles.apresentacao}>
                <li>
                  {" "}
                  Versatilidade: A guitarra oferece uma ampla variedade de estilos
                  musicais para explorar, desde o rock e blues até o jazz e o
                  folk.
                </li>
                <li>
                  {" "}
                  Expressividade: Com a guitarra, você pode transmitir emoções e
                  criar sua própria música de forma única.
                </li>
                <li>
                  {" "}
                  Benefícios Cognitivos: Tocar guitarra estimula o cérebro,
                  melhora a coordenação e alivia o estresse.
                </li>
                <li>
                  {" "}
                  Comunidade Musical: Junte-se a uma comunidade de músicos
                  apaixonados pela guitarra. Compartilhe experiências, dicas e
                  inspirações.{" "}
                </li>
              </ul>
  
              <h2 className={styles.subtitle}>O que oferecemos:</h2>
              <ul className={styles.apresentacao}>
                <li>
                  Aulas Personalizadas: Nossos instrutores talentosos e
                  experientes estão prontos para guiá-lo em sua jornada musical,
                  adaptando as aulas ao seu nível e estilo de aprendizado.
                </li>
                <li>
                  {" "}
                  Repertório Diversificado: Aprenda suas músicas favoritas
                  enquanto desenvolve suas habilidades. De clássicos atemporais a
                  músicas contemporâneas, temos tudo!{" "}
                </li>
                <li>
                  {" "}
                  Workshops Criativos: Explore técnicas avançadas, improvisação e
                  composição. Liberte sua criatividade musical!
                </li>
                <li>
                  Recursos Online: Acesse vídeo aulas, partituras, guias práticos
                  e muito mais em nossa plataforma online de fácil uso.
                </li>
              </ul>
  
              <p className={styles.apresentacao}>
                Não perca a oportunidade de desbloquear seu potencial musical com a
                guitarra. Junte-se a nós e comece sua jornada musical hoje!
              </p>
  
              <p className={styles.apresentacao}>Vamos tocar juntos?</p>
            </div>
  
            <div className={styles.imageContainer}>
              <Image
                className={styles.fotocurso}
                src={guitarra}
                alt="foto curso de guitarra"
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