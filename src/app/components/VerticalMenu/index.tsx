"use client";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { IconInstagram } from "../Icons/IconsContato/iconInstagram";
import { IconYoutube } from "../Icons/IconsContato/iconYoutube";
import { IconWhatsapp } from "../Icons/IconsContato/iconWhatsapp";
import { IconEmail } from "../Icons/IconsContato/iconEmail";
import alunosescola from "../../../../public/images/alunosescola.png"
export function VerticalMenu() {
  return (
    <div className={styles.verticalMenu}>
      <h2 className={styles.titlemenu}>Siga-nos</h2>
     
     
      <ul className={styles.contatosList}>
        <li className={styles.itemContato}>
          <IconInstagram />
        </li>
        <li className={styles.itemContato}>
          <IconYoutube />
        </li>
        <li className={styles.itemContato}>
          <a
            href="https://api.whatsapp.com/send?phone=5531986132070"
            target="_blank"
          >
            <IconWhatsapp />
          </a>
        </li>
        <li className={styles.itemContato}>
          <a href="mailto:escolamusicforall@gmail.com">
            <IconEmail />
          </a>
        </li>
      </ul>
      <div className={styles.imgMenu}>
              <Image
                className={styles.img}
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
