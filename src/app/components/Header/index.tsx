"use client";import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { MenuIcon } from "../Icons/iconsHome/iconMenu";
import { IconClose } from "../Icons/iconsHome/iconClose";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true); // Define como verdadeiro quando o usuário estiver logado
      } else {
        setLoggedIn(false); // Define como falso quando o usuário não estiver logado
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <a href="/">
            <Image className={styles.img} src={logo} alt="Logotipo Music For All" />
          </a>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          {menuOpen ? <IconClose /> : <MenuIcon />}
        </div>

        {(menuOpen || windowWidth >= 768) && (
          <nav className={`${styles.navContainer} ${menuOpen ? styles.open : ""}`}>
            <Link href="/" className={styles.aContainer} onClick={closeMenu}>
              Início
            </Link>

            <Link href="/cursos" className={styles.aContainer} onClick={closeMenu}>
              Cursos
            </Link>

            <Link href="/blog" className={styles.aContainer} onClick={closeMenu}>
              Blog
            </Link>

            <Link href="/contato" className={styles.aContainer} onClick={closeMenu}>
              Contato
            </Link>

            {loggedIn ? (
              // Se o usuário estiver logado, exibe o link de "Logout"
              <Link href="/dashboard" className={styles.aContainer} onClick={closeMenu}>
                Logout
              </Link>
            ) : (
              // Se o usuário não estiver logado, exibe o link de "Aluno"
              <Link href="/dashboard" className={styles.aContainer} onClick={closeMenu}>
                Aluno
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
