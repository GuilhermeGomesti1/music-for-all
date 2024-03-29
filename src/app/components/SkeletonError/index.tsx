"use client";
import React from "react";
import styles from "./styles.module.css";

const SkeletonErrorProduct = () => {
  return (
    <div className={`${styles.listaProducts} ${styles.skeleton}`}>
      <p>Erro ao carregar produtos. Por favor, tente novamente mais tarde.</p>
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

export default SkeletonErrorProduct;
