import { AppProps } from "next/app";
import { Theme } from "../containers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Theme />
      <Component {...pageProps} />
    </>
  );
}
