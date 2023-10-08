"use client";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import beneficios from "../../../public/images/beneficios.png";
import Image from "next/image";
import styles from "./styles.module.css";

import { db, auth } from "../firebase";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Link from "next/link";

export default function Dashboard() {
  interface UserDetail {
    uid: string;
    email?: string;
  }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        console.log("Cadastrado com sucesso");
        setEmail("");
        setSenha("");
      })
      .catch(() => {
        console.log("Erro ao cadastrar ");
      });
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        console.log("user logado com sucesso");
        console.log(value.user);

        if (value.user.email) {
          setUserDetail({
            uid: value.user.uid,
            email: value.user.email,
          });
        } else {
          setUserDetail({
            uid: value.user.uid,
            email: undefined,
          });
        }

        setUser(true);
        setEmail("");
        setSenha("");
      })
      .catch(() => {
        console.log("Erro ao fazer login");
      });
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetail(null);
  }

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // se tem usuário
          console.log(user);
          setUser(true);
          setUserDetail({
            uid: user.uid,
            email: undefined,
          });
        } else {
          // não possui usuário
          setUser(false);
          setUserDetail(null);
        }
      });
    }

    checkLogin();
  }, []);

  return (
    <div className={`${styles.container} animated-item`}> 
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
      <li className={styles.itemContato}>
        <IconWhatsappfixed />
      </li>
      <div className={`${styles.titlesection} animated-item`}>
  {user ? (
    <span>Seja bem-vindo: {userDetail?.email}</span>
  ) : (
    <span className={`${styles.facalogintext} animated-item`}>Faça login para acessar o conteúdo. Como aluno, você terá acesso a recursos exclusivos para aprimorar suas habilidades musicais.</span>  
  )}
</div>
      {user ? (
        <div>
        
          <Link href={"/alunos"} className={`${styles.buttonContainer} animated-item`}>
            <button className={styles.subtitleButton}>
 
              <span >
                Clique aqui para acessar o seu conteúdo exclusivo!
              </span>
            </button>
          </Link>
        
          
        </div>
      ) : (
        <div className={`${styles.formContainer} animated-item`}>
          
          <form>
            <label className={`${styles.formLabel} animated-item`}>Email</label> 
            <input
              className={`${styles.formInput} animated-item`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </form>

          <label className={`${styles.formLabel} animated-item`}>Senha</label>
          <input
            className={`${styles.formInput} animated-item`}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />

          <button className={`${styles.formButton} animated-item`}onClick={logarUsuario}> 
            Fazer Login
          </button>
        </div> )}

        <div className={`${styles.beneficiosAluno} animated-item`}>
       
        <Image
                className={`${styles.img2} animated-item`} 
                src={beneficios}
                alt="Music For All Logo"
                loading="lazy"
              />
   
   
  </div>

     {/* <button onClick={novoUsuario}>Cadastrar</button> */}
{/* <button onClick={logarUsuario}>Fazer Login</button> */}
{/* <button onClick={fazerLogout}>Fazer logout</button> */}
  </div>
);
}