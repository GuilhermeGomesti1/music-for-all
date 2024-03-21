import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { DownArrow } from "../Icons/OtherIcons/downArrow";

type MenuState = {
  [key: string]: boolean;
};

export function MenuProducts() {
  const [menuOpen, setMenuOpen] = useState<MenuState>({
    instrumentos: false,
    acessorios: false,
    pedais: false,
    percussao: false,
    mesas: false,
  });

  const openMenu = (menuName: string) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: true,
    }));
  };

  const closeMenu = (menuName: string) => {
    setMenuOpen((prevState) => ({
      ...prevState,
      [menuName]: false,
    }));
  };

  return (
    <div className={styles.container}>
      {menuOpen.instrumentos ||
      menuOpen.acessorios ||
      menuOpen.pedais ||
      menuOpen.percussao ||
      menuOpen.mesas ? (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen({})}
          onMouseEnter={() => setMenuOpen({})}
          onMouseLeave={() => setMenuOpen({})}
        ></div>
      ) : null}
      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("instrumentos")}
          onMouseLeave={() => closeMenu("instrumentos")}
          onBlur={() => closeMenu("instrumentos")}
        >
          <span className={styles.span}>
            Por categoria <DownArrow />{" "}
          </span>
        </button>
        {menuOpen.instrumentos && (
          <nav
            className={styles.menuContent}
            onMouseEnter={() => openMenu("instrumentos")}
            onMouseLeave={() => closeMenu("instrumentos")}
          >
            <ul className={styles.listaMenu}>
              <Link href="/category/Instrumentos&nbsp;Musicais">
                <li className={styles.aContainer}>Instrumentos Musicais</li>
              </Link>
              <Link href="/category/Acessórios">
                <li className={styles.aContainer}>Acessórios</li>
              </Link>
              <Link href="/category/Microfones">
                <li className={styles.aContainer}>Microfones</li>
              </Link>
              <Link href="/category/Pedais&nbsp;de&nbsp;Efeito">
                <li className={styles.aContainer}>Pedais de Efeito</li>
              </Link>
              <Link href="/category/Baquetas">
                <li className={styles.aContainer}>Percussão</li>
              </Link>
              <Link href="/category/Mesas&nbsp;de&nbsp;Mixagem">
                <li className={styles.aContainer}>Mesas de Mixagem</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
