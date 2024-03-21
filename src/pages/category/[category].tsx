import styles from "./styles.module.css";
import Products from "@/app/components/Products";
import { Providers } from "@/providers";
import { useRouter } from "next/router";
import { useState } from "react";
export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query; // Obtém a categoria da URL
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <Providers>
      {" "}
      <div>
        <h2 className={styles.title}>Produtos da Categoria: {category}</h2>
        <Products searchTerm={searchTerm} categoryFilter={category as string} />
      </div>
    </Providers>
  );
}
