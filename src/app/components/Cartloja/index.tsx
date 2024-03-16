"use client";
import FmtPrice from "../FmtPrice";
import { CardIcon } from "../Icons/OtherIcons/card";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../../type.d";
import { useState, useEffect } from "react";
import SigninButton from "../signinGoogle/signinButton";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CartIcon } from "../Icons/OtherIcons/cartIcon";

export default function CartLoja() {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    if (productData) {
      productData.map((item: StoreProduct) => {
        amt += item.price * item.quantity;
      });
      setTotalAmount(amt);
    }
  }, [productData]);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);

  const { data: session } = useSession();
  const handleCheckOut = async () => {
    const stripe = await stripePromise;
    if (!productData || !productData.length || !session?.user?.email) {
      console.error("Invalid data for checkout");
      alert(
        "Erro no checkout. Por favor, verifique os dados e tente novamente."
      );

      return;
    }
    const requestHeaders = { "Content-type": "application/json" };
    const requestBody = { items: productData, email: session?.user?.email };

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      console.error("Response body:", await response.text());
      return;
    }

    const checkoutSession = await response.json();
    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error.message);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // O código abaixo será executado apenas no navegador
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: true,
          // Outras opções de configuração aqui
        });

        sr.reveal(".animated-iteml", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, [productData]);

  return (
    <>
      {productData &&
        productData.length > 0 && ( // Renderizar apenas se houver itens no carrinho
          <div className={`${styles.all} animated-iteml`}>
            <div className={styles.divprincipal}>
              <Link
                href="/carrinho" //carrinho
                className={styles.anpmContainer}
                title="Minhas compras"
              >
                Ir para o carrinho <CartIcon />{" "}
                <span>({productData.length})</span>
              </Link>
            </div>
            <p className={styles.textValue}>
              Total:{""}
              <span className={styles.spanValue}>
                <FmtPrice amount={totalAmount} />
              </span>
            </p>

            {userInfo ? (
              <div className={styles.buttons}>
                <Link className={styles.button} href={"/carrinho"}>
                  <button className={styles.button}>Proseguir Comprando</button>{" "}
                </Link>
                <p className={styles.textLogin}>
                  <SigninButton />
                </p>
              </div>
            ) : (
              <div className={styles.buttons}>
                <Link className={styles.button} href={"/carrinho"}>
                  <button className={styles.button}>Proseguir Comprando</button>{" "}
                </Link>
                <p className={styles.textLogin}>
                  <SigninButton />
                </p>
              </div>
            )}
          </div>
        )}
    </>
  );
}
