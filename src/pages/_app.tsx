import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import { seo } from "../utils/seo";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, "sans-serif";
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
