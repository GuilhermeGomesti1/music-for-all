import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

export const metadata = {
  title: " Página Inicial- Ecola de Música Music For All",
  description: "Escola de música Music For All",
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="../public/faviicon/faviicon.ico" />
      </Head>
      <meta name="google-site-verification" content="OTGVRM3dX1SxQkV60D8vU00mKlK8Od3sZ2qA9FCvgWs" />
      <body>
        <Header/>
        <ToastContainer autoClose={3000} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
