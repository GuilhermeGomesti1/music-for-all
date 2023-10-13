import Image from "next/image";
import styles from "./styles.module.css";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import materiais from "../../../public/images/materiais.png";

export default function Materiais() {
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

        <div className={`${styles.titlesection} animated-item`}>
          <span>Material de Acesso Exclusivo</span>
        </div>

        <div className={styles.divImgMateriais}>
          <Image
            className={styles.imgCursos}
            src={materiais}
            alt="Imagem do curso"
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <div>
          <a href="/images/apostilamusicforall.pdf" download>
            {" "}
            {/* Caminho relativo à pasta 'public' */}
            Baixar PDF
          </a>
        </div>
      </main>
    </>
  );
}
