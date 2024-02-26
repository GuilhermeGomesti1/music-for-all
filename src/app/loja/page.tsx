"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { SessionProvider } from "next-auth/react";
import homeoficial from "../../../public/images/homeoficial.png";
import homecursos from "../../../public/images/homecursos.png";
import { Form } from "../components/Form";
import { IconWhatsappfixed } from "../components/Icons/IconsContato/iconWhatsappfixed";
import { useEffect } from "react";
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

export default function Loja() {
  const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next
  );

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

              <div className={`${styles.textContent} animated-item`}>
                <input
                  className={styles.serchProducts}
                  type="text"
                  placeholder="Pesquisar Produtos"
                />{" "}
                <span className={styles.search}>
                  <SearchIcon />
                </span>
                <span>
                  <HeartIcon />
                  {favoriteData.length > 0 && (
                    <span>{favoriteData.length} </span>
                  )}
                </span>
                <div>
                  <p className={styles.infoMessage}>
                    <InfoIcon />
                    &ldquo;Caro visitante, agradecemos por explorar nossa loja
                    em desenvolvimento. No momento, estamos aprimorando nossa
                    plataforma para oferecer produtos reais em breve. Por favor,
                    note que os produtos atualmente exibidos não são reais e
                    estão presentes apenas para o processo de desenvolvimento da
                    loja. Sua paciência é valiosa, e mal podemos esperar para
                    apresentar nossos produtos genuínos. Fique atento às
                    atualizações e, enquanto isso, sinta-se à vontade para
                    entrar em contato conosco para quaisquer perguntas. A
                    transparência é a base de nossa jornada, e estamos ansiosos
                    para compartilhar nossa evolução consigo.&rdquo;
                  </p>
                </div>
              </div>
              <Products />

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
