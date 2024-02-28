import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { resetCart } from "@/store/nextSlice";
import { DashCartIcon } from "../Icons/OtherIcons/dashCart";

export default function ResetCart() {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Deseja realmente limpar todos produtos do carrinho?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button onClick={handleResetCart} className={styles.btnresetcart}>
      <DashCartIcon /> Esvaziar carrinho
    </button>
  );
}
