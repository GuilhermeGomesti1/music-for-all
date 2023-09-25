"use client";
import styles from "./styles.module.css";
export function Form() {
    const handleFormSubmit = () => {
      const nomeElement = document.getElementById("nome") as HTMLInputElement;
      const emailElement = document.getElementById("email") as HTMLInputElement;
      const whatsappElement = document.getElementById("whatsapp") as HTMLInputElement;
  
      if (nomeElement && emailElement && whatsappElement) {
        const nome = nomeElement.value;
        const email = emailElement.value;
        const whatsapp = whatsappElement.value;
  
       
        const whatsappURL = `https://api.whatsapp.com/send?phone=5531986132070&text=Nome:%20${encodeURIComponent(
          nome
        )}%0AEmail:%20${encodeURIComponent(email)}%0AWhatsApp:%20${encodeURIComponent(
          whatsapp
        )}`;
  
        window.open(whatsappURL);
        nomeElement.value = "";
        emailElement.value = "";
        whatsappElement.value = "";
      } else {
        console.error("Elementos não encontrados.");
      }
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
  
          <label className={styles.formLabel} htmlFor="whatsapp">
            WhatsApp:
          </label>
          <input
            className={styles.formInput}
            type="text"
            id="whatsapp"
            name="whatsapp"
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
  
