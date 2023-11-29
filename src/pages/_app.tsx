import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import logo from '@/assets/logo.svg';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href={logo} />
    </Head>
    <Component {...pageProps} />
  </> 
  )
  
}
