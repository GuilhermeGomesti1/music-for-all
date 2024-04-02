"use client";
import "../../app/globals.css";
import { Footer } from "@/app/components/Footer";
import styles from "./styles.module.css";
import Products from "@/app/components/Products";
import { Providers } from "@/providers";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"; // Adicionado o useEffect
import ScrollToTop from "@/app/components/scrooltotop";
import Link from "next/link";
import { BackLoja } from "@/app/components/Icons/OtherIcons/backloja";
import { CartIcon } from "@/app/components/Icons/OtherIcons/cartIcon";
import SkeletonProduct from "@/app/components/SkeletonProduct";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (category) {
      setLoading(false);
    }
  }, [category]);

  return (
    <div className={styles.all}>
      <ScrollToTop />
      <Providers>
        <div className={styles.main}>
          {loading ? (
            <div className={styles.skeleton}>
              <SkeletonProduct />
            </div>
          ) : (
            <>
              <h2 className={styles.title}>
                Produtos da Categoria: {category}
              </h2>
              <Products
                searchTerm={searchTerm}
                categoryFilter={category as string}
              />
              <Link href={"/loja"}>
                <button className={styles.btnVoltar}>
                  <BackLoja /> Voltar para a loja
                </button>
              </Link>
              <Link href={"/carrinho"}>
                <button className={styles.btnVoltar}>
                  <CartIcon /> Ir para o carrinho
                </button>
              </Link>
            </>
          )}
        </div>
      </Providers>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
