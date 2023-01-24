import { type AppType } from "next/app";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>marat khasanov</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
