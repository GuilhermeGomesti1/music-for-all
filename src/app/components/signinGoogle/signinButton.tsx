"use client";
import styles from "./styles.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useCallback, useEffect } from "react";
import {
  addToCart,
  addUser,
  increaseQuantity,
  removeUser,
  setAllProducts,
  resetCart,
  resetFavoriteData,
} from "@/store/nextSlice"; // Certifique-se de importar addUser e removeUser
import { useDispatch } from "react-redux";
import { StoreProduct } from "../../../../type.d";

const SigninButton = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleLogin = async () => {
    try {
      await signIn(); // Aguarde o signIn ser concluído antes de atualizar o carrinho
      updateCartOnLogin();
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };
  const handleLogout = () => {
    // Salve o carrinho local antes de fazer logout
    const userCart = JSON.stringify(localStorage.getItem("userCart")) || "[]";
    localStorage.setItem("userCartBackup", userCart);

    signOut();
    // Limpar o carrinho local ou fazer outras ações necessárias quando o usuário faz logout
  };

  const updateCartOnLogin = useCallback(async () => {
    if (session && session.user) {
      try {
        const backupCartString = localStorage.getItem("userCartBackup");
        const backupCart: StoreProduct[] = backupCartString
          ? JSON.parse(backupCartString)
          : [];

        const savedCartString = localStorage.getItem("userCart");
        const savedCart: StoreProduct[] = savedCartString
          ? JSON.parse(savedCartString)
          : [];

        const updatedCart: StoreProduct[] = savedCart.map(
          (item: StoreProduct) => ({
            ...item,
            userId: session.user!.name,
          })
        );

        // Adicionar os itens do backup ao carrinho atualizado
        const finalCart = [...updatedCart, ...backupCart];

        dispatch(setAllProducts(finalCart));
        dispatch(addUser(session.user.name));

        // Limpar o backup do carrinho local
        localStorage.removeItem("userCartBackup");

        console.log("Carrinho atualizado no login");
      } catch (error) {
        console.error("Erro ao atualizar carrinho após o login:", error);
      }
    }
  }, [session, dispatch]);

  useEffect(() => {
    updateCartOnLogin();
  }, [updateCartOnLogin]);

  if (session && session.user) {
    return (
      <div>
        <p>Bem vindo {session.user.name}</p>
        <button className={styles.btnsignout} onClick={handleLogout}>
          Sair
        </button>
      </div>
    );
  }

  return (
    <button className={styles.textLogin} onClick={handleLogin}>
      Fazer o login para prosseguir a compra
    </button>
  );
};

export default SigninButton;
