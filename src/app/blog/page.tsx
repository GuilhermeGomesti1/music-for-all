"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
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
        </div>

       

          <div className={styles.principal}>
            <h1 className={styles.titles}>
            Descubra a Magia da Música em Nossa Escola
               </h1>
        
               <div className={styles.video}>
               <iframe width="560" height="315" src="https://www.youtube.com/embed/ReDuOTb9vRE?si=OXOlAgSI1WbnGH0S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </div>

          </div>

      </main>
    </>
  );
}
