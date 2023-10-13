"use client";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/app/firebase";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import logo from "../../../../public/images/logo.png";
import { MenuIcon } from "../Icons/iconsHome/iconMenu";
import { IconClose } from "../Icons/iconsHome/iconClose";
import { LogoutIcon } from "../Icons/iconsHome/iconLogout";
import { toast } from "react-toastify";

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

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Tem certeza de que deseja fazer logout?"
    );

    if (confirmLogout) {
      try {
        await signOut(auth);
        setLoggedIn(false);
        toast.info('Logout feito com sucesso');
        window.location.href = "/";
        
      } catch (error) {
        console.error("Erro ao fazer logout:", error);
      }
    }
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
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <a href="/">
            <Image
              className={styles.img}
              src={logo}
              alt="Logotipo Music For All"
            />
          </a>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMenu}>
          {menuOpen ? <IconClose /> : <MenuIcon />}
        </div>

        {(menuOpen || windowWidth >= 768) && (
          <nav
            className={`${styles.navContainer} ${menuOpen ? styles.open : ""}`}
          >
            <Link href="/" className={styles.aContainer} onClick={closeMenu}>
              Início
            </Link>

            <Link
              href="/cursos"
              className={styles.aContainer}
              onClick={closeMenu}
            >
              Cursos
            </Link>

            <Link
              href="/blog"
              className={styles.aContainer}
              onClick={closeMenu}
            >
              Blog
            </Link>

            <Link
              href="/contato"
              className={styles.aContainer}
              onClick={closeMenu}
            >
              Contato
            </Link>

            {loggedIn ?(<Link
              href="/alunos"
              className={styles.aContainer}
              onClick={closeMenu}
            >
              Aluno
            </Link> ) : (  <Link href="/dashboard"  className={styles.aContainer}
              onClick={closeMenu}>Aluno</Link>)}
            

            {loggedIn && (
              <a href="/" title="Logout" className={styles.logout} onClick={handleLogout}>
                <LogoutIcon/> 
              </a>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
