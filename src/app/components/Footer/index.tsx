"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import logofooter from "../../../../public/images/logotrasparente.png";
import { IconInstagram } from "../Icons/iconsFooter/iconInstagram";
import { IconYoutube } from "../Icons/iconsFooter/iconYoutube";
import { IconWhatsapp } from "../Icons/iconsFooter/iconWhatsapp";
import { IconEmail } from "../Icons/iconsFooter/iconEmail";
import { IconCopy } from "../Icons/iconsFooter/iconCopy";
import { IconSend } from "../Icons/iconsFooter/iconSend";
import { IconTel } from "../Icons/iconsFooter/iconTel";
import { useEffect } from "react";

export function Footer() {

  useEffect(() => {

    if (process.browser) {
      // O código abaixo será executado apenas no navegador
      import('scrollreveal').then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: true,
          // Outras opções de configuração aqui
        });

        sr.reveal('.animated-item', {
          origin: 'bottom',
          distance: '20px',
          easing: 'ease-in-out',
        });
      });
    }
  }, []);


  const copyToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handlePhoneClick = () => {
    const phoneNumber = "(31)986132070";
    copyToClipboard(phoneNumber);
    alert(
      "Número de telefone copiado para a área de transferência: " + phoneNumber
    );
  };

  const handleAddressClick = () => {
    const address =
      "Avenida Wilson Alvarenga, 1140, sala 504 - João Monlevade/MG";
    copyToClipboard(address);
    alert("Endereço copiado para a área de transferência: " + address);
  };
  return (
    <div className={`${styles.footer} animated-item`}>
      <div>
        <Image
          className={styles.img} 
          src={logofooter}
          alt="Logotipo Music For All"
          width={120}
          height={130}
        />
      </div>
      <div className={styles.contatos}>
        <ul className={styles.contatosList}>
          <li className={styles.itemContato}>
            <IconInstagram className={styles.iconFooter} />
          </li>

          <li className={styles.itemContato}>
            <IconYoutube />
          </li>
          <li className={styles.itemContato}>
            <a
              href="https://api.whatsapp.com/send?phone=5531986132070"
              target="_black"
            >
              <IconWhatsapp />
            </a>
          </li>
          <li className={styles.itemContato}>
            {" "}
            <a href="mailto:escolamusicforall@gmail.com">
              <IconEmail />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.divContact}>
        <ul>
          <li
            className={styles.itemContato}
            onClick={handlePhoneClick}
            id="telefone"
            title="Clique aqui para copiar"
          >
            Telefone: (31)986132070 <IconTel />
          </li>
          <li className={styles.itemContato}>
            <a
              className={styles.email}
              href="mailto:escolamusicforall@gmail.com"
              title="Clique aqui para nos enviar um e-mail"
            >
              E-mail: escolamusicforall@gmail.com <IconSend />
            </a>
          </li>
          <li
            className={styles.itemContato}
            onClick={handleAddressClick}
            id="endereco"
            title="Clique aqui para copiar"
          >
            Av.Wilson Alvarenga, 1140, sala 504-João Monlevade/MG
            <IconCopy />
          </li>
        </ul>
      </div>
    </div>
  );
}
