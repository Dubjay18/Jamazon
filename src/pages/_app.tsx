import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
