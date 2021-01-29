import { AppProps } from "next/dist/next-server/lib/router/router";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
