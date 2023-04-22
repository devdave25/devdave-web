import { ModalProvider } from '@/context/modal';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return <><ModalProvider><Component {...pageProps} /></ModalProvider><Analytics /></>
}
