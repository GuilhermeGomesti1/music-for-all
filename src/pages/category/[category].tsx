"use client";
import "../../app/globals.css";
import { Footer } from "@/app/components/Footer";
import styles from "./styles.module.css";
import Products from "@/app/components/Products";
import { Providers } from "@/providers";
import { useRouter } from "next/router";
import { useState } from "react";
export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className={styles.all}>
      <Providers>
        <div className={styles.main}>
          <h2 className={styles.title}>Produtos da Categoria: {category}</h2>{" "}
          <Products
            searchTerm={searchTerm}
            categoryFilter={category as string}
          />
        </div>
      </Providers>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}
