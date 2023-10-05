"use client"
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Alunos() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // O usuário está autenticado, atualize a variável de estado
        setLoggedIn(true);
      } else {
        // O usuário não está autenticado, mantenha a variável de estado como falsa
        setLoggedIn(false);
      }
    });

    // Certifique-se de cancelar a inscrição quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Página dos alunos</h1>
      {loggedIn ? (
        // Conteúdo exclusivo para alunos autenticados
        <div>
         <h1> conteudo Página dos alunos</h1>
        </div>
      ) : (
        // Mensagem de login e link para a página de login
        <div>
          <strong>Faça o login para ter acesso</strong>
          <Link href="/dashboard" passHref>
           
              <button className={styles.buttons}>
                <span className={styles.iconButton}></span>
                <span className={styles.titleButton}>Aluno</span>
                <span className={styles.subtitleButton}>
                  Clique aqui para acessar o seu conteúdo exclusivo!
                </span>
              </button>
            
          </Link>
        </div>
      )}
    </div>
  );
}
