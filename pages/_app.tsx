import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import PreLoader from '../components/preloader4';
import LoginSignUp from '../components/loginsignup';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Le code ici sera exécuté que côté client OMG 5 HEURES DE DEBUGG ET FORUM POUR RESOUDRE MON SOUCIS DE ROUTES
    const { createBrowserHistory } = require('@remix-run/router');
    const { BrowserRouter } = require('react-router-dom');
  }, []);

  return (
    <>
      <Head>
        <title>💫fuck Synchro💫</title>
      </Head>

      {/* Utilisation de BrowserRouter à l'intérieur de useEffect pour éviter l'exécution côté serveur */}
      {typeof window !== 'undefined' && (
        <BrowserRouter>
        <PreLoader/>
          <Routes>
            <Route path="/login" element={<LoginSignUp />} />
            <Route path="/" element={<Component {...pageProps} />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default MyApp;
