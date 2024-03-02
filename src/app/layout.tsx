import type { Metadata } from "next";
import Script from "next/script";
import { poppins } from "@revisela/assets/fonts";
import Navbar from "@revisela/components/Navbar";
import Footer from "@revisela/components/Footer";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "@revisela/store/StoreProvder";

export const metadata: Metadata = {
  title: "Revisela",
  description:
    "Supercharge your exam preparation with our interactive fill-in maker! Our user-friendly web app helps students revise for exams by creating personalized practice materials. Teachers can also utilize our tool to effortlessly generate engaging revision resources. Try it now and boost your exam success!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CXS6Y24RL8"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', 'G-CXS6Y24RL8');
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <StoreProvider>
          <Navbar />
          <main className="main__layout">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
