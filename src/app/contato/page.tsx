import Image from "next/image";
import styles from "./styles.module.css";

import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";

export default function Contato() {
  return (
    <>
      <main>
        <div>
          <Image
            className={styles.img}
            src={homeoficial}
            alt="Music For All Logo"
            width={1895}
            height={598}
            quality={100}
            placeholder="blur"
            loading="lazy"
          />
        </div>

        <div>
          <Image
            className={styles.violaoContainer}
            src={homecursos}
            alt="Music For All Logo"
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>Fale Conosco!</h1>
          <p>
            Deseja obter mais detalhes? Sinta-se à vontade para entrar em
            contato conosco através de qualquer um dos meios listados abaixo.
            Estamos aqui para ajudar!{" "}
          </p>
        </div>

        <div className={styles.divLista}>
        <span className={styles.itens}>Telefone:</span>
          <p className={styles.item}>(31)986132070</p>
          <span className={styles.itens}>E-mail:</span>
          <p className={styles.item}>escolamusicforall@gmail.com</p>
          <span className={styles.itens}>Endereço:</span>
          <p className={styles.item}>
            Avenida. Wilson Alvarenga, 1140 – Carneirinhos Cep: 35930-001 – João Monlevade/ MG
            – Brasil
          </p>
         
         
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </main>
    </>
  );
}
