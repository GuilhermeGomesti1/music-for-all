import Image from "next/image";
import styles from "./styles.module.css";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import materiais from "../../../public/images/apostila.png";
import partituraimg from "../../../public/images/partituraimg.png";
import tablaturaimg from "../../../public/images/tablaturaimg.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import ScrollToTop from "../components/scrooltotop";

export default function Materiais() {
  return (
    <>
      <ScrollToTop />
      <title>Materiais Exclusivos- Escola de Música Music For All</title>
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

        <div className={`${styles.description} animated-item`}>
          <h1 className={`${styles.titledescription} animated-item`}>
            Materiais Exclusivos
          </h1>
          <span className={`${styles.spandescription} animated-item`}>
            Aqui, você encontrará uma série de recursos personalizados para
            aprimorar sua jornada musical.{" "}
            <span className={styles.spanBasta}>Basta clicar e baixar!</span>
          </span>
        </div>

        <div className={`${styles.allmateriais} animated-item`}>
          <div className={`${styles.divImgMateriais} animated-item`}>
            <a href="/images/apostilamusicforall.pdf" download>
              {" "}
              <Image
                className={styles.imgCursos}
                src={materiais}
                alt="Imagem do curso"
                loading="lazy"
                placeholder="blur"
                title="Clique para baixar!"
              />{" "}
            </a>
          </div>

          <div className={`${styles.divImgMateriais} animated-item`}>
            <a href="/images/pauta.pdf" download>
              <Image
                className={styles.imgCursos}
                src={partituraimg}
                alt="Imagem do curso"
                loading="lazy"
                placeholder="blur"
                title="Clique para baixar!"
              />
            </a>
          </div>

          <div className={`${styles.divImgMateriais} animated-item`}>
            <a href="/images/tablaturas.pdf" download>
              <Image
                className={styles.imgCursos}
                src={tablaturaimg}
                alt="Imagem do curso"
                loading="lazy"
                placeholder="blur"
                title="Clique para baixar!"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
