import styles from "./styles.module.css";
import Image from "next/image";
import logofooter from "../../../../public/images/logotrasparente.png";
import { IconInstagram } from "../Icons/iconsFooter/iconInstagram";
import { IconYoutube } from "../Icons/iconsFooter/iconYoutube";
import { IconWhatsapp } from "../Icons/iconsFooter/iconWhatsapp";
import { IconEmail } from "../Icons/iconsFooter/iconEmail";
export function Footer() {
  return (
    <div className={styles.footer}>
    
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
            <IconInstagram className={styles.iconFooter}/>
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
          <li className={styles.itemContato}> <a href="mailto:escolamusicforall@gmail.com">
            <IconEmail />
          </a></li>
        </ul>

        
      
      </div>

      <div>
      
        <ul>
          <li className={styles.itemContato}>Telefone: (31)986132070 </li>
          <li className={styles.itemContato}>
            <a className={styles.email} href="mailto:escolamusicforall@gmail.com">
              E-mail: escolamusicforall@gmail.com
            </a>
          </li>
          <li className={styles.itemContato}> Avenida Wilson Alvarenga, 1140, sala 504 -João Monlevade/MG</li>
        </ul>
      </div>

    
    </div>
  );
}
