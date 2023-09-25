import Image from "next/image";
import styles from "./styles.module.css";

import homeoficial from "../../../public/images/homeoficial.png"
import homemobile from "../../../public/images/homemobile.png"


export default function Contato() {
  return (
    <>
      <main>
      <div>
              <Image
                className={styles.img}
              
                src={homeoficial}
                alt="Music For All Logo"
                width={1895}
                height={598}
                quality={100}
                placeholder="blur"
                loading="lazy"
              />
            </div>

            <div>
              <Image
                className={styles.imgMobile}
                src={homemobile}
                alt="foto home mobile"
                width={390}
                height={658}
                loading="lazy"
                placeholder="blur"
              />
            </div>

       
      </main>
    </>
  );
}
