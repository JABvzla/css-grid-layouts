import { AppProps } from "next/dist/next-server/lib/router/router";
import { theme } from "../styles/default-theme";
import { ReactNode } from "react";
import "../i18n";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
