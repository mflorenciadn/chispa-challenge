import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

const Nomad = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default appWithTranslation(Nomad);
