import { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

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

  const isAnyMenuOpen = Object.values(menuOpen).some((isOpen) => isOpen);

  return (
    <div className={styles.container}>
      {/* Overlay para escurecer o resto da tela quando qualquer menu estiver aberto */}
      {isAnyMenuOpen && (
        <div
          className={styles.overlay}
          onMouseEnter={() => {
            for (const menu in menuOpen) {
              if (menuOpen.hasOwnProperty(menu) && menuOpen[menu]) {
                closeMenu(menu);
              }
            }
          }}
        />
      )}

      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("instrumentos")}
          onMouseLeave={() => closeMenu("instrumentos")}
          onBlur={() => closeMenu("instrumentos")}
        >
          <span className={styles.span}>Instrumentos Musicais</span>
        </button>
        {menuOpen.instrumentos && (
          <nav className={styles.menuContent}>
            <ul className={styles.listaMenu}>
              <Link href="/category/Instrumentosmusicais">
                <li className={styles.aContainer}>Guitarras</li>
              </Link>
              <Link href="/category/Acessorios">
                <li className={styles.aContainer}>Violões</li>
              </Link>
              <Link href="/category/Microfones">
                <li className={styles.aContainer}>Contrabaixos</li>
              </Link>
              <Link href="/category/PedaisdeEfeito">
                <li className={styles.aContainer}>Teclados</li>
              </Link>
              <Link href="/category/Baquetas">
                <li className={styles.aContainer}>Baterias</li>
              </Link>
              <Link href="/category/MesasdeMixagem">
                <li className={styles.aContainer}>Percussão</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("acessorios")}
          onMouseLeave={() => closeMenu("acessorios")}
          onBlur={() => closeMenu("acessorios")}
        >
          <span className={styles.span}>Acessórios</span>
        </button>
        {menuOpen.acessorios && (
          <nav className={styles.menuContent}>
            <ul className={styles.listaMenu}>
              <Link href="/category/Cabos">
                <li className={styles.aContainer}>Cabos</li>
              </Link>
              <Link href="/category/Cases">
                <li className={styles.aContainer}>Cases</li>
              </Link>
              <Link href="/category/Fonesdeouvido">
                <li className={styles.aContainer}>Fones de Ouvido</li>
              </Link>
              <Link href="/category/Encordoados">
                <li className={styles.aContainer}>Encordoamentos</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("pedais")}
          onMouseLeave={() => closeMenu("pedais")}
          onBlur={() => closeMenu("pedais")}
        >
          <span className={styles.span}>Pedais de Efeito</span>
        </button>
        {menuOpen.pedais && (
          <nav className={styles.menuContent}>
            <ul className={styles.listaMenu}>
              <Link href="/category/Overdrive">
                <li className={styles.aContainer}>Overdrive</li>
              </Link>
              <Link href="/category/Distortion">
                <li className={styles.aContainer}>Distortion</li>
              </Link>
              <Link href="/category/Delay">
                <li className={styles.aContainer}>Delay</li>
              </Link>
              <Link href="/category/Reverb">
                <li className={styles.aContainer}>Reverb</li>
              </Link>
              <Link href="/category/Fuzz">
                <li className={styles.aContainer}>Fuzz</li>
              </Link>
              <Link href="/category/WahWah">
                <li className={styles.aContainer}>Wah-Wah</li>
              </Link>
              <Link href="/category/Volume">
                <li className={styles.aContainer}>Volume</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("percussao")}
          onMouseLeave={() => closeMenu("percussao")}
          onBlur={() => closeMenu("percussao")}
        >
          <span className={styles.span}>Percussão</span>
        </button>
        {menuOpen.percussao && (
          <nav className={styles.menuContent}>
            <ul className={styles.listaMenu}>
              <Link href="/category/Baquetas">
                <li className={styles.aContainer}>Baquetas</li>
              </Link>
              <Link href="/category/Baterias">
                <li className={styles.aContainer}>Baterias</li>
              </Link>
              <Link href="/category/CaixaseTantans">
                <li className={styles.aContainer}>Caixas e Tantãs</li>
              </Link>
              <Link href="/category/PandeiroseRepiniques">
                <li className={styles.aContainer}>Pandeiros e Repiniques</li>
              </Link>
              <Link href="/category/Timbales">
                <li className={styles.aContainer}>Timbales</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onMouseEnter={() => openMenu("mesas")}
          onMouseLeave={() => closeMenu("mesas")}
          onBlur={() => closeMenu("mesas")}
        >
          <span className={styles.span}>Mesas de Mixagem</span>
        </button>
        {menuOpen.mesas && (
          <nav className={styles.menuContent}>
            <ul className={styles.listaMenu}>
              <Link href="/category/MesasdeMixagem">
                <li className={styles.aContainer}>Todas as Mesas</li>
              </Link>
              <Link href="/category/MesasAnalógicas">
                <li className={styles.aContainer}>Mesas Analógicas</li>
              </Link>
              <Link href="/category/MesasDigitais">
                <li className={styles.aContainer}>Mesas Digitais</li>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
