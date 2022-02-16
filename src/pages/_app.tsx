import { useEffect } from "react";
import { AppProps } from "next/app";
import { Theme } from "~/containers";
import { registerGoogleTracking } from "~/lib/ga-tracking";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const unregisterGoogleTracking = registerGoogleTracking(router);
    return unregisterGoogleTracking();
  }, []);

  return (
    <>
      <Theme />
      <Component {...pageProps} />
    </>
  );
}
