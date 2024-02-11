"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import {
  addToCart,
  addUser,
  increaseQuantity,
  removeUser,
  setAllProducts,
} from "@/store/nextSlice"; // Certifique-se de importar addUser e removeUser
import { useDispatch } from "react-redux";

const SigninButton = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn();
  };

  const handleLogout = () => {
    dispatch(removeUser()); // Remova as informações do usuário do estado quando o usuário fizer logout
    signOut();
    // Limpar o carrinho local ou fazer outras ações necessárias quando o usuário faz logout
  };

  // Atualizar o carrinho e adicionar informações do usuário ao fazer login
  const updateCartOnLogin = async () => {
    if (session && session.user) {
      try {
        // Faça uma chamada à API ou lógica apropriada para obter o carrinho do usuário
        const userCart = await addUser(session.user); // Substitua 'fetchUserCart' com sua lógica
        dispatch(setAllProducts(userCart)); // Atualize o estado do carrinho no Redux

        // Adicione as informações do usuário ao estado Redux
        dispatch(addUser(session.user.name)); // Substitua 'name' pela propriedade do usuário que deseja armazenar
      } catch (error) {
        console.error("Erro ao atualizar o carrinho após o login:", error);
      }
    }
  };

  // Executar a atualização do carrinho quando o usuário faz login
  React.useEffect(() => {
    updateCartOnLogin();
  }, [session]);

  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={handleLogout}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={handleLogin}>Sign In</button>;
};

export default SigninButton;
