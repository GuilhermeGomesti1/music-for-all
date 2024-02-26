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

export default function CartPayment() {
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
      return;
    }
    const requestHeaders = { "Content-type": "application/json" };
    const requestBody = { items: productData, email: session?.user?.email };

    console.log("Request Headers:", requestHeaders);
    console.log("Request Body:", requestBody);
    console.log("Request Body:", JSON.stringify(requestBody));

    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });
    console.log("Request Body:", JSON.stringify(requestBody));
    console.log("Após a Requisição Fetch");
    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);
    console.log("Request Body:", requestBody);
    console.log("Product Data (Client):", productData);
    console.log("Session Email (Client):", session?.user?.email);
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

  return (
    <div className={styles.all}>
      <div className={styles.divprincipal}>
        <span>
          <CardIcon />
        </span>
        <p className={styles.text}>
          Seu pedido se qualifica para envio GRATUITO escolhendo essa opção em
          Confira. Veja detalhes.
        </p>
      </div>
      <p className={styles.textValue}>
        Total:{""}
        <span className={styles.spanValue}>
          <FmtPrice amount={totalAmount} />
        </span>
      </p>

      {userInfo ? (
        <div className={styles.buttons}>
          <button onClick={handleCheckOut} className={styles.button}>
            Proseguir Comprando
          </button>
          <p className={styles.textLogin}>
            <SigninButton />
          </p>
        </div>
      ) : (
        <div className={styles.buttons}>
          <button onClick={handleCheckOut} className={styles.button}>
            Proseguir Comprando
          </button>
          <p className={styles.textLogin}>
            <SigninButton />
          </p>
        </div>
      )}
    </div>
  );
}
