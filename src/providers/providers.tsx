"use client";
import { ReactNode } from "react";
import { Header } from "@/app/components/Header";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import Loja from "@/app/loja/page";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Header />

          <Loja />
        </PersistGate>
      </Provider>
    </>
  );
};
