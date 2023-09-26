"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import facapartemobile from "../../../public/images/facapartemobile.png"
import facaparte from "../../../public/images/facaparte.png"

export default function Blog() {
  return (
    <>
      <main className={styles.contentAll}>
        <div>
        <div>
            <Image
            className={styles.facaparte}
            src={facaparte}
            alt="foto dos alunos"
            width={1833}
            height={911}/>
          
          </div>

          <div>
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
        </div>

       

          <div className={styles.principal}>
            <h1 className={styles.titles}>
            Descubra a Magia da Música em Nossa Escola
               </h1>
        
               <div className={styles.video}>
             
               </div>

          </div>

      </main>
    </>
  );
}