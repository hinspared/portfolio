import { type AppType } from "next/app";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "700"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
