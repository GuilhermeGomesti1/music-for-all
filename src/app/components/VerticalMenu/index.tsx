"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { IconInstagram } from "../Icons/IconsContato/iconInstagram";
import { IconYoutube } from "../Icons/IconsContato/iconYoutube";
import { IconWhatsapp } from "../Icons/IconsContato/iconWhatsapp";
import { IconEmail } from "../Icons/IconsContato/iconEmail";
import alunosescola from "../../../../public/images/alunosescola.png"
export function VerticalMenu() {

  useEffect(() => {

    if (process.browser) {
      // O código abaixo será executado apenas no navegador
      import('scrollreveal').then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
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

  return ( 
    <div className= {`${styles.verticalMenu} animated-item`}>
      <h2 className= {`${styles.titlemenu} animated-item`}>Siga-nos</h2> 
     
     
      <ul className={`${styles.contatosList} animated-item`}>   
        <li className={ `${styles.itemContato} animated-item`}>
          <IconInstagram />
        </li>
        <li className={ `${styles.itemContato} animated-item`}>
          <IconYoutube />
        </li>
        <li className={ `${styles.itemContato} animated-item`}>
          <a
            href="https://api.whatsapp.com/send?phone=5531986132070"
            target="_blank"
          >
            <IconWhatsapp />
          </a>
        </li>
        <li className={ `${styles.itemContato} animated-item`}>
          <a href="mailto:escolamusicforall@gmail.com">
            <IconEmail />
          </a>
        </li>
      </ul>
      <div className={`${styles.imgMenu} animated-item`}>
              <Image
                className={`${styles.img} animated-item`}
                src={alunosescola}
                alt="Music For All Logo"
                width={370}
                height={470}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>
    </div>
  );
}
