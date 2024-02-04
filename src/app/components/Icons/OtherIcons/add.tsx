import { SVGProps } from "react";
import styles from "./styles.module.css";

export const AddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={styles.AddIcon}
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M256 112v288m144-144H112"
      ></path>
    </svg>
  );
};
