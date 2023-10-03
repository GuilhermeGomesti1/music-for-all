"use client"
import styles from "./styles.module.css"
import { db, auth} from "../firebase";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  , signOut, onAuthStateChanged} from "firebase/auth";

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
            email: undefined, // Use undefined em vez de null
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
  async function fazerLogout(){
    await signOut(auth)
    setUser(false);
    setUserDetail(null)
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
          })
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
    <div className={styles.container}>
      <h1>Alunos</h1>

      {user && (
        <div>
          <strong>Seja bem-vindo</strong>
          <span>ID: {userDetail?.uid} - Email: {userDetail?.email}</span>
        </div>
      )}

      <label>Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      /> <br />

      <label>Senha</label>
      <input
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha"
      /> <br />
      <button onClick={novoUsuario}>Cadastrar</button>
      <button onClick={logarUsuario}>Fazer Login</button>
      <button onClick={fazerLogout}>Fazer logout</button>
    </div>
  );
}
