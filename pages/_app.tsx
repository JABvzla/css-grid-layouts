import { AppProps } from "next/dist/next-server/lib/router/router";
import { ReactNode } from "react";
import "../styles/globals.css";
import "../i18n";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
