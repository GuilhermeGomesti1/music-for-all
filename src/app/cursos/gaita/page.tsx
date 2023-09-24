import Image from "next/image";
import styles from "./styles.module.css";
import gaita from "../../../../public/images/gaita.png";
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
              />


          <Image
            className={styles.violaoContainer}
            src={homecursos}
            alt="Music For All Logo"
          />
        </div>

        <div className={styles.cursodegaita}>



          <h1 className={styles.title}>
          Gaita
          </h1>

          <div className={styles.textContainer}>
            <p className={styles.apresentacao}>
              Bem-vindo ao mundo mágico da gaita, onde as notas se transformam
              em harmonia e a música flui como um rio. Seja você um iniciante
              curioso ou um amante da música em busca de novas sonoridades, você
              está no lugar certo!
            </p>

            <h2 className={styles.subtitle}>Por que a gaita?</h2>

            <ul className={styles.apresentacao}>
              <li>
                {" "}
                Portabilidade: A gaita é um instrumento compacto e fácil de
                transportar, tornando-a perfeita para tocar em qualquer lugar.
              </li>
              <li>
                {" "}
                Expressividade: Com a gaita, você pode criar emoções e nuances
                únicas na música.
              </li>
              <li>
                {" "}
                Versatilidade: Este instrumento pode ser usado em uma variedade
                de estilos musicais, do blues ao folk e além.
              </li>
              <li>
                {" "}
                Comunidade Musical: Junte-se a outros músicos apaixonados pela
                gaita e compartilhe seu amor pela música.{" "}
              </li>
            </ul>

            <h2 className={styles.subtitle}>O que oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li>
                Aulas Personalizadas: Nossos instrutores experientes estão
                prontos para guiá-lo em sua jornada musical, adaptando as aulas
                ao seu nível e estilo de aprendizado.
              </li>
              <li>
                {" "}
                Repertório Diversificado: Aprenda a tocar músicas populares e
                tradicionais na gaita enquanto desenvolve suas habilidades.
              </li>
              <li>
                {" "}
                Técnicas Avançadas: Explore técnicas avançadas de sopro, bending
                e vibrato para aprimorar suas habilidades musicais.
              </li>
              <li>
                Recursos Online: Acesse vídeo aulas, partituras, guias práticos
                e muito mais em nossa plataforma online de fácil uso.
              </li>
            </ul>

            <p className={styles.apresentacao}>
              Não perca a oportunidade de mergulhar no mundo da música com a
              gaita. Junte-se a nós e comece sua jornada musical hoje!
            </p>

            <p className={styles.apresentacao}>Vamos tocar juntos?</p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.fotocurso}
              src={gaita}
              alt="foto curso de gaita"
            />
          </div>

          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>
              Gostaria de mais informações? Preencha o formulário abaixo!
            </h2>
            <form>
              <label  className={styles.formLabel} htmlFor="nome">Nome:</label>
              <input className={styles.formInput} type="text" id="nome" name="nome" />

              <label  className={styles.formLabel} htmlFor="email">Email:</label>
              <input className={styles.formInput} type="email" id="email" name="email" />

              <label  className={styles.formLabel} htmlFor="whatsapp">WhatsApp:</label>
              <input className={styles.formInput} type="text" id="whatsapp" name="whatsapp" />

              <button className={styles.formButton} type="submit">Quero mais informações!</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
