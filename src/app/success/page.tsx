"use client";
import styles from "./styles.module.css";
import { resetCart } from "@/store/nextSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "../components/scrooltotop";
import { BackLoja } from "../components/Icons/OtherIcons/backloja";

localStorage.setItem("showMessageMap", "{}");
export default function SuccessPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);
  return (
    <div className={styles.main}>
      <ScrollToTop />
      <h1 className={styles.title}>Obrigado por comprar na Music For All!</h1>
      <Link href={"/loja"}>
        <button className={styles.btnVoltar}>
          <BackLoja /> Voltar para a loja
        </button>
      </Link>
    </div>
  );
}
