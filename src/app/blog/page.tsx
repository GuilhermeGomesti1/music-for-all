"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import facapartemobile from "../../../public/images/facapartemobile.png";
import curiosidades from "../../../public/images/curiosidades.png";
import musicoterapia from "../../../public/images/musicoterapia.png";
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
            <p className={styles.subtitles}>
              Observar a performance de nossos alunos é uma experiência
              verdadeiramente inspiradora, e isso nos lembra de um importante
              aspecto da jornada musical: o talento é algo que merece ser
              nutrido e cultivado. Ele não é apenas uma habilidade, mas um
              presente especial que deve ser compartilhado com o mundo. É com
              grande honra que fazemos parte deste processo de crescimento como
              músicos, junto com cada um de nossos alunos{" "}
            </p>
          </div>

          <div className={styles.videoAndText}>
            <div className={styles.divvideo}>
              <h1 className={styles.titles}>
                Fatos interessantes e curiosidades super legais que
                provavelmente você não sabia sobre música
              </h1>
              <Image
                className={styles.video}
                src={curiosidades}
                alt="Music For All Logo"
                width={700}
                height={394}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <ul className={styles.subtitles}>
              <li>
                Poucas atividades estimulam e utilizam praticamente todo o
                cérebro, e música é uma delas.
              </li>

              <li>
                Os arrepios que você começa a sentir quando escuta uma música
                são causados pela liberação de dopamina pelo cérebro,
                antecipando o ápice de uma canção.
              </li>

              <li>
                {" "}
                Estudar música regularmente irá alterar fisicamente sua
                estrutura cerebral. Alterações associadas à aprendizagem ocorrem
                principalmente nas conexões entre os neurônios.
              </li>
              <li>
                O cérebro responde à músicas da mesma forma que responde quando
                você come algo. A dopamina é a substância que permite que uma
                pessoa possa sentir prazeres de tais coisas.
              </li>
            </ul>
          </div>

          <div className={styles.videoAndText}>
            <div className={styles.divvideo}>
              <h1 className={styles.titles}>
                Fatos interessantes e curiosidades super legais que
                provavelmente você não sabia sobre música
              </h1>
              <Image
                className={styles.video}
                src={musicoterapia}
                alt="Music For All Logo"
                width={700}
                height={394}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>
            <p className={styles.subtitles}>
              Você sabia que a música pode ser usada como método para alívio e
              cura de certas doenças e distúrbios? Para muitas pessoas, a música
              acalma, relaxa o corpo e a mente; proporciona liberdade, sensação
              de alívio e esperança. A musicoterapia é uma forma de terapia que
              utiliza a música e seus elementos para estudar a relação de cada
              indivíduo, proporcionando maior qualidade de vida.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
