import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import { Providers } from "@/providers";
export default function ProductPage() {
  const router = useRouter();

  const product = router.query.product
    ? JSON.parse(router.query.product as string)
    : null;

  return (
    <>
      <Providers>
        <div>
          {product && (
            <div className={styles.main}>
              <h1 className={styles.title}>{product.title}</h1>
              <div className={styles.imgProduct}>
                <Image
                  width={300}
                  height={300}
                  src={product.image}
                  alt="productImage"
                />
              </div>
              <div></div>

              {/* Restante do código... */}
            </div>
          )}
        </div>
      </Providers>
    </>
  );
}
