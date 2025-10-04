import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { sfProDisplay } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sfProDisplay.regular.variable} ${sfProDisplay.medium.variable} ${sfProDisplay.bold.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
