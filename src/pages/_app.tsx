import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import favicon from '@/assets/favicon.png';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Converte o caminho da imagem para uma string */}
        <link rel="icon" href={favicon.src} />
        <title>NostalgiaFlix</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
