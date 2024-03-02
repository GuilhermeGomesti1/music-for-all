import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import { Providers } from "@/providers";
import Products from "@/app/components/Products";

export default function ProductPage() {
  const router = useRouter();

  const product = router.query.product
    ? JSON.parse(router.query.product as string)
    : null;

  return (
    <>
      <Providers>
        <div>
          <Products selectedProduct={product} />

          {/* Restante do código... */}
        </div>
      </Providers>
    </>
  );
}
