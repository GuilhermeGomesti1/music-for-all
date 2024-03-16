"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Item } from "../components/CartProducts";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import dadoscartao from "../../../public/images/dadoscartao.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateProps } from "../../../type.d";
import { CartProducts } from "../components/CartProducts";
import ResetCart from "../components/ResetCart";
import Link from "next/link";
import CartPayment from "../components/CartPayment/page";
import SigninButton from "../components/signinGoogle/signinButton";
import { CartIcon } from "../components/Icons/OtherIcons/cartIcon";
import { BackLoja } from "../components/Icons/OtherIcons/backloja";
import ScrollToTop from "../components/scrooltotop";
interface StoreProduct {
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
  brand: string;
  _id: number;
  // Outras propriedades do produto
  userId: string | null;
}

const mapStoreProductToItem = (storeProduct: StoreProduct): Item => {
  return {
    brand: storeProduct.brand,
    category: storeProduct.category,
    description: storeProduct.description,
    image: storeProduct.image,
    isNew: "", // Adicione o valor apropriado se necessário
    oldPrice: 0, // Adicione o valor apropriado se necessário
    price: storeProduct.price,
    title: storeProduct.title,
    _id: storeProduct._id,
    quantity: storeProduct.quantity,
  };
};

export default function Carrinho() {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  const userCartItems: StoreProduct[] = productData.filter(
    (item: StoreProduct) => item.userId === userInfo
  );

  useEffect(() => {
    if (process.browser) {
      // O código abaixo será executado apenas no navegador
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
          // Outras opções de configuração aqui
        });

        sr.reveal(".animated-item", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      <title>Carrinho- Escola de Música Music For All</title>
      <main className={styles.main}>
        <IconWhatsappfixed />

        <div className={styles.cartmain}>
          {productData.length > 0 ? (
            <>
              <div className={styles.minhasCompras}>
                <div className={styles.compras}>
                  <p className={`${styles.title} animated-item`}>
                    Carrinho
                    <CartIcon />{" "}
                    <span className={styles.cartNumber}>
                      ({productData ? productData.length : 0})
                    </span>
                  </p>
                </div>

                <div className={styles.carrinho}>
                  {userCartItems.map((storeProduct: StoreProduct) => (
                    <div key={storeProduct._id}>
                      <CartProducts
                        item={mapStoreProductToItem(storeProduct)}
                      />
                    </div>
                  ))}
                  <div className={styles.bottons}>
                    <ResetCart />
                    <Link href={"/loja"}>
                      <button className={styles.btnVoltar}>
                        <BackLoja /> Voltar para a loja
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.areaPgm}>
                <CartPayment />
              </div>

              <div className={styles.divCardData}>
                <Image
                  className={styles.dadoscartao}
                  src={dadoscartao}
                  alt="fake card"
                  width={380}
                  height={123}
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
            </>
          ) : (
            <div className={styles.vazio}>
              <h1 className={styles.text}>Seu carrinho está vazio!</h1>
              <Link href={"/loja"}>
                <button className={styles.btnVoltar1}>
                  <BackLoja /> Voltar para a loja
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
