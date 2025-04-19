import type { Metadata } from "next";
import { Providers } from "@/store/Providers";
import "./globals.css";
import Header from "./components/Header";
import BtnFloat from "./components/BtnFloat";
import Footer from "@/app/components/Footer";




export const metadata: Metadata = {
  title: "FINCO",
  description: "Tubanco de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body className={` antialiased flex flex-col justify-between items-center`}>

        <Providers>
          <Header />
          <div id="inicio" className="w-full h-14"></div>
          <BtnFloat />
          {children}
          <Footer />
        </Providers>


      </body>
    </html>
  );
}
