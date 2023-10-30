import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const metadata = {
  title:  " Página Inicial- Ecola de Música Music For All",
  description: "Escola de música Music For All",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          <ToastContainer autoClose={3000}/>
        {children}
        <Footer/>
        
      </body>
    
    </html>
  );
}
