import '../styles/global.scss';
import type { AppProps } from 'next/app';

import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/app.styles.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
