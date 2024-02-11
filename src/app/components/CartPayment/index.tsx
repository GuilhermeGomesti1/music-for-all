"use client";
import FmtPrice from "../FmtPrice";
import { CardIcon } from "../Icons/OtherIcons/card";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { StateProps, StoreProduct } from "../../../../type.d";
import { useState, useEffect } from "react";
import SigninButton from "../signinGoogle/signinButton";

export default function CartPayment() {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);
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
          <button className={styles.button}>Proseguir Comprando</button>
          <p className={styles.textLogin}>
            <SigninButton />
          </p>
        </div>
      ) : (
        <div className={styles.buttons}>
          <button className={styles.button}>Proseguir Comprando</button>
          <p className={styles.textLogin}>
            <SigninButton />
          </p>
        </div>
      )}
    </div>
  );
}
