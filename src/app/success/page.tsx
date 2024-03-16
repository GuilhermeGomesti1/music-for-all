"use client";
import { resetCart } from "@/store/nextSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "../components/scrooltotop";

export default function SuccessPage() {
  const dispatch = useDispatch();
  return (
    <div>
      <ScrollToTop />
      <h1>Obrigado por comprar na Music For All</h1>
      <Link href={"/loja"} onClick={() => dispatch(resetCart())}>
        <p>Continuar comprando </p>
      </Link>
    </div>
  );
}
