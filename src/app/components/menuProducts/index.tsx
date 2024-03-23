"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { DownArrow } from "../Icons/OtherIcons/downArrow";
import Image from "next/image";
import logofooter from "../../../../public/images/logotrasparente.png";
import { IconCurso } from "../Icons/iconsHome/iconCurso";
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

  useEffect(() => {
    if (process.browser && menuOpen.instrumentos) {
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 150,
          reset: false,
        });

        sr.reveal(".animated-itemM", {
          origin: "top",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, [menuOpen.instrumentos]);

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
            className={`${styles.overlay} animated-itemM`}
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
            className={`${styles.menuContent} animated-itemM`}
            onMouseEnter={() => openMenu("instrumentos")}
            onMouseLeave={() => closeMenu("instrumentos")}
          >
            <ul className={`${styles.listaMenu} animated-itemM`}>
              <Link href="/category/Instrumentos&nbsp;Musicais">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Instrumentos Musicais
                </li>
              </Link>
              <Link href="/category/Acessórios">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Acessórios
                </li>
              </Link>
              <Link href="/category/Microfones">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Microfones
                </li>
              </Link>
              <Link href="/category/Pedais&nbsp;de&nbsp;Efeito">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Pedais de Efeito
                </li>
              </Link>
              <Link href="/category/Baquetas">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Percussão
                </li>
              </Link>
              <Link href="/category/Mesas&nbsp;de&nbsp;Mixagem">
                <li className={styles.aContainer}>
                  <IconCurso />
                  Mesas de Mixagem
                </li>
              </Link>
            </ul>
          </nav>
        )}{" "}
      </div>
    </div>
  );
}
