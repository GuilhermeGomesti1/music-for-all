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
  const [mouseOverButton, setMouseOverButton] = useState(false); // Estado para controlar se o mouse está sobre o botão

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
      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => {
            openMenu("instrumentos");
            setMouseOverButton(true);
          }}
          onMouseLeave={() => {
            closeMenu("instrumentos");
            setMouseOverButton(false);
          }}
          onBlur={() => closeMenu("instrumentos")}
        >
          Por categoria <DownArrow />{" "}
        </button>
        {(menuOpen.instrumentos || mouseOverButton) && (
          <div
            className={styles.overlay}
            onMouseEnter={() =>
              setMenuOpen((prevState) => ({ ...prevState, instrumentos: true }))
            }
            onMouseLeave={() =>
              setMenuOpen((prevState) => ({
                ...prevState,
                instrumentos: false,
              }))
            }
            onClick={() => closeMenu("instrumentos")}
          />
        )}
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
