import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import PreLoader from '../components/preloader4';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>💫fuck Synchro💫</title>
      </Head>
      <Component {...pageProps} />
      
    </>
  );
}

export default MyApp;
