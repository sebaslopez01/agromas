import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand, DM_Serif_Display } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <main className={`${quicksand.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
