"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { SessionProvider } from "next-auth/react";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect, useState } from "react";
import { SearchIcon } from "../components/Icons/OtherIcons/search";
import { InfoIcon } from "../components/Icons/OtherIcons/info";
import Products from "../components/Products";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { CartIcon } from "../components/Icons/OtherIcons/cartIcon";
import { useSelector } from "react-redux";
import { StateProps } from "../../../type.d";
import { HeartIcon } from "../components/Icons/OtherIcons/heart";
import { useRouter } from "next/router";
import SigninButton from "../components/signinGoogle/signinButton";

import Cartloja from "../components/Cartloja";
import ScrollToTop from "../components/scrooltotop";
import { MenuProducts } from "../components/menuProducts";

export default function Loja() {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (process.browser) {
      import("scrollreveal").then((ScrollRevealModule) => {
        const ScrollReveal = ScrollRevealModule.default || ScrollRevealModule;

        const sr = ScrollReveal({
          duration: 1000,
          reset: false,
        });

        sr.reveal(".animated-item", {
          origin: "bottom",
          distance: "20px",
          easing: "ease-in-out",
        });
      });
    }
  }, []);

  if (typeof window !== "undefined") {
    if (window.location.pathname !== "/loja" || !productData) {
    }
  }
  return (
    <>
      <ScrollToTop />
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SessionProvider>
            <title>Loja- Escola de Música Music For All</title>
            <main>
              <div>
                <Image
                  className={styles.img}
                  src={homeoficial}
                  alt="Music For All Logo"
                  width={1833}
                  height={598}
                  quality={100}
                  placeholder="blur"
                  loading="lazy"
                />
              </div>

              <div>
                <Image
                  className={styles.violaoContainer}
                  src={homecursos}
                  alt="Music For All Logo"
                  loading="lazy"
                  placeholder="blur"
                />
              </div>
              <IconWhatsappfixed />
              <Cartloja />

              <div className={`${styles.textContent} animated-item`}>
                <input
                  className={styles.serchProducts}
                  type="text"
                  placeholder="Pesquisar Produtos"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className={styles.search}>
                  <SearchIcon />
                </span>
                {/* <span>
  <HeartIcon />
  {favoriteData.length > 0 && (
    <span>{favoriteData.length} </span>
  )}
</span> */}
                <div>
                  <p className={styles.infoMessage}>
                    <InfoIcon />
                    &ldquo;Caro visitante, agradecemos por explorar nossa loja
                    em desenvolvimento. Gostaríamos de informar que os itens
                    atualmente exibidos são fictícios, fazendo parte do processo
                    de desenvolvimento. No momento, esses produtos não estão
                    disponíveis para compra. Estamos trabalhando diligentemente
                    para aprimorar nossa plataforma e em breve apresentaremos
                    produtos reais.&rdquo;
                  </p>
                </div>
              </div>

              <Products searchTerm={searchTerm} />

              <div className={styles.form}>
                <Form />
              </div>
            </main>
          </SessionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
