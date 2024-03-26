import { SVGProps } from "react";
import styles from "./styles.module.css";

export const RemoveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={styles.RemoveIcon}
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
        d="M400 256H112"
      ></path>
    </svg>
  );
};
