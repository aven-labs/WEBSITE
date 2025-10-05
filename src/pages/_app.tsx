import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { sfProDisplay } from "@/lib/fonts";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${sfProDisplay.regular.variable} ${sfProDisplay.medium.variable} ${sfProDisplay.bold.variable}`}
    >
      <ScrollArea className="h-screen">
        <Component {...pageProps} />
      </ScrollArea>
    </main>
  );
}
