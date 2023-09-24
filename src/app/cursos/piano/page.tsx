import Image from "next/image";
import styles from "./styles.module.css";
import violao from "../../../../public/images/violao.png";
import piano from "../../../../public/images/piano.png";
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

        <div className={styles.cursodepiano}>
          <h1 className={styles.title}>
         Piano e Teclado
          </h1>

          <div className={styles.textContainer}>
            <p className={styles.apresentacao}>
              Bem-vindo ao universo mágico do piano e teclado, onde as notas
              fluem como poesia e a música ganha vida. Se você é um iniciante
              curioso ou um amante da música em busca de aprimoramento, você
              está no lugar certo!
            </p>

            <h2 className={styles.subtitle}>Por que o piano e teclado?</h2>

            <ul className={styles.apresentacao}>
              <li>
                {" "}
                Versatilidade: O piano e teclado oferecem uma ampla gama de
                sons e estilos musicais para explorar, desde clássico até pop e
                eletrônico.
              </li>
              <li>
                {" "}
                Expressividade: Esses instrumentos permitem que você transmita
                emoções de forma única por meio da música.
              </li>
              <li>
                {" "}
                Benefícios Cognitivos: Aprender piano e teclado estimula o
                cérebro, aprimora a memória e aumenta a concentração.
              </li>
              <li>
                {" "}
                Comunidade Musical: Faça parte de uma comunidade de músicos
                apaixonados pelo piano e teclado. Compartilhe experiências,
                dicas e inspirações.{" "}
              </li>
            </ul>

            <h2 className={styles.subtitle}>O que oferecemos:</h2>
            <ul className={styles.apresentacao}>
              <li>
                Aulas Personalizadas: Nossos instrutores talentosos e
                experientes estão prontos para orientar sua jornada musical,
                adaptando as aulas ao seu nível e estilo de aprendizado.
              </li>
              <li>
                {" "}
                Repertório Diversificado: Aprenda suas músicas favoritas enquanto
                aprimora suas habilidades. Do clássico ao contemporâneo, temos
                um vasto repertório!{" "}
              </li>
              <li>
                {" "}
                Workshops Criativos: Explore técnicas avançadas, improvisação e
                composição. Desperte sua criatividade musical!
              </li>
              <li>
                Recursos Online: Tenha acesso a videoaulas, partituras, guias
                práticos e muito mais em nossa plataforma online de fácil uso.
              </li>
            </ul>

            <p className={styles.apresentacao}>
              Não perca a oportunidade de desbloquear seu potencial musical com o
              piano e teclado. Junte-se a nós e comece sua jornada musical hoje!
            </p>

            <p className={styles.apresentacao}>Vamos tocar juntos?</p>
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.fotocurso}
              src={piano}
              alt="foto curso de violão"
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
