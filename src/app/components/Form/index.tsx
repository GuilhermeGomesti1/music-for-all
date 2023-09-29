"use client";
import { useState } from "react";
import styles from "./styles.module.css";
export function Form() {  
  
    const [formattedValue, setFormattedValue] = useState("");
    const handleFormSubmit = () => {
      const nomeElement = document.getElementById("nome") as HTMLInputElement;
      const emailElement = document.getElementById("email") as HTMLInputElement;
      const whatsappElement = document.getElementById("whatsapp") as HTMLInputElement;
    
      if (nomeElement && emailElement && whatsappElement) {
        const nome = nomeElement.value;
        const email = emailElement.value;
        const whatsapp = whatsappElement.value;

        if (!nome || !email || !whatsapp) {
          alert("Por favor, preencha todos os campos.");
          return; 
        }
        if (!isValidEmail(email)) {
          alert("Por favor, insira um endereço de email válido.");
          return; 
        }
       
        const mensagemAdicional = "Quero mais informações sobre a 'Music for All-Escola de Música'!\n\n";
        
       
        const whatsappURL = `https://api.whatsapp.com/send?phone=5531986132070&text=${encodeURIComponent(
          mensagemAdicional + 
          `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}`
        )}`;
  
        window.open(whatsappURL);
        nomeElement.value = "";
        emailElement.value = "";
        whatsappElement.value = "";
      } else {
        alert("Elementos não encontrados.");
      }
    };

    const isValidEmail = (email: string) => {
    
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  
    return (
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>
          Gostaria de mais informações? Preencha o formulário abaixo!
        </h2>
        <form>
          <label className={styles.formLabel} htmlFor="nome">
            Nome:
          </label>
          <input className={styles.formInput} type="text" id="nome" name="nome" />
  
          <label className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
          />
  <input
  className={styles.formInput}
  type="text"
  id="whatsapp"
  name="whatsapp"
  placeholder="(00) ____-_____"
  maxLength={15} // Altere esta linha para um valor numérico
  value={formattedValue}
  onChange={(e) => {
    const input = e.target;
    const value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    let formattedValue = "";

    if (value.length <= 2) {
      formattedValue = `(${value}`;
    } else if (value.length <= 6) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }

    setFormattedValue(formattedValue); // Atualize o estado
  }}
/>
  
          <button
            className={styles.formButton}
            type="button"
            onClick={handleFormSubmit}
          >
            Quero mais informações!
          </button>
        </form>
      </div>
    );
  }
 