import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utilis/scroll-observer";
import SizeObserver from "../utilis/size-observer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  );
}

export default MyApp;
