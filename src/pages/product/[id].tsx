"use client";
import "../../app/globals.css";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import { Providers } from "@/providers";
import Products from "@/app/components/Products";
import FormattedAmount from "../../app/components/FmtPrice";
import Link from "next/link";
import { BackLoja } from "@/app/components/Icons/OtherIcons/backloja";
import { Footer } from "@/app/components/Footer";

export default function ProductPage() {
  const router = useRouter();

  const product = router.query.product
    ? JSON.parse(router.query.product as string)
    : null;

  return (
    <div className={styles.all}>
      <Providers>
        <div>
          {product && (
            <>
              <div className={styles.main}>
                <div className={styles.column}>
                  <h1 className={styles.title}>{product.title}</h1>
                  <div className={styles.imgProduct}>
                    <Image
                      className={styles.img}
                      width={500}
                      height={500}
                      src={product.image}
                      alt="productImage"
                    />
                  </div>
                </div>
                <div className={styles.divDescription}>
                  <span className={styles.titleDescription}>
                    Informações do produto
                  </span>
                  <p className={styles.description}>{product.description}</p>

                  <p className={styles.description}>
                    <span className={styles.titleDescription}>Categoria: </span>
                    {product.category}
                  </p>

                  <p className={styles.description}>
                    {" "}
                    <span className={styles.titleDescription}>Marca: </span>
                    {product.brand}
                  </p>
                  <p className={styles.pprice}>
                    De
                    <span className={styles.spanprice}>
                      <FormattedAmount amount={product.oldPrice} />
                    </span>
                    Por
                    <span>
                      {" "}
                      <FormattedAmount amount={product.price} />
                    </span>
                  </p>
                  <Link href={"/loja"}>
                    <button className={styles.btnVoltar}>
                      <BackLoja /> Voltar para a loja
                    </button>
                  </Link>
                </div>
              </div>
              <div className={styles.productCard}>
                <Products selectedProduct={product} />
              </div>
            </>
          )}
          {/* Restante do código... */}
        </div>
        <div className={styles.footer}></div>
      </Providers>
      <Footer />
    </div>
  );
}
