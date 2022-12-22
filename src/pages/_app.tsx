import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import { seo } from "../utils/seo";

import { Rubik } from "@next/font/google";
const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily}, "sans-serif";
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
