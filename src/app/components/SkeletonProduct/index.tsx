"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import carregandogif from "../../../../public/images/carregandogif.gif";
const SkeletonProduct = () => {
  return (
    <div className={`${styles.listaProducts} ${styles.skeleton}`}>
      <Image
        width={150}
        height={150}
        src={carregandogif}
        alt="Skeleton Loader"
        className={styles.imggif}
      />
      <div className={styles.imageContainer}></div>
      <div className={styles.divSpan}>
        <span className={styles.spanIcons}></span>
        <span className={styles.spanIcons}></span>
      </div>
      <p className={styles.textpreço}></p>
      <hr />
      <div className={styles.divtextCategory}>
        <p className={styles.pcategory}></p>
        <p className={styles.ptitle}></p>
        <p className={styles.pprice}></p>
        <p className={styles.pdescription}></p>
      </div>
    </div>
  );
};

export default SkeletonProduct;
