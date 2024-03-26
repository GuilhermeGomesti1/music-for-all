import { SVGProps } from "react";
import styles from "./styles.module.css";

export const RemoveProduct = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={styles.RemoveProduct}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368 144 144m224 0L144 368"
      ></path>
    </svg>
  );
};
