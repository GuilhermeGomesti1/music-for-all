import { SVGProps } from "react";
import styles from "./styles.module.css";

export const IconContact = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={styles.iconContact}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="#000"
        stroke-width="2"
        d="M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z"
      ></path>
    </svg>
  );
};
