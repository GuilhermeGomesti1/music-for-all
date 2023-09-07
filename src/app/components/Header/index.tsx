import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../../public/images/logo.png"
//importar caminho da minha logo
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
    
      <div className={styles.logoContainer}>
          <a>
            <Image className={styles.img} src={logo} alt="Music For All Logo" />
          </a>
        </div>

        <nav className={styles.navContainer}>
          <Link href="/" className={styles.aContainer}>
            Home
          </Link>

          <Link href="/cursos" className={styles.aContainer}>
            Sobre
          </Link>
  
        </nav>
      </div>
    </header>
  );
}
