"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import facapartemobile from "../../../public/images/facapartemobile.png";
import facaparte from "../../../public/images/facaparte.png";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { VerticalMenu } from "../components/VerticalMenu";
export default function Blog() {
  return (
    <>
      <main className={styles.contentAll}>
     
        <div>
          <Image
            className={styles.facaparte}
            src={facaparte}
            alt="foto dos alunos"
            width={1833}
            height={911}
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <VerticalMenu />
        <div className={styles.imgMobile}>
          <Image
            className={styles.imgMobile}
            src={facapartemobile}
            alt="foto home mobile"
            width={390}
            height={658}
            loading="lazy"
            placeholder="blur"
          />
        </div>

        <IconWhatsappfixed />
   
        <div className={styles.principal}>
     
          

        
          <div className={styles.videoAndText}>
            <div className={styles.divvideo}>
            <h1 className={styles.titles}>
          O Palco é Deles: Alunos Brilhando na Escola de Música!
          </h1>
              <iframe 
                className={styles.video}
                width="700"
                height="394"
                src="https://www.youtube.com/embed/ReDuOTb9vRE?si=p2zRmIz_bBg9txC7"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <p className={styles.subtitles}>Observar a performance de nossos alunos é uma experiência verdadeiramente inspiradora, e isso nos lembra de um importante aspecto da jornada musical: o talento é algo que merece ser nutrido e cultivado. Ele não é apenas uma habilidade, mas um presente especial que deve ser compartilhado com o mundo. É com grande honra que fazemos parte deste processo de crescimento como músicos, junto com cada um de nossos alunos </p>
          </div>
        </div>
      </main>
    </>
  );
}
