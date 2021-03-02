import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Interactive Canvas Sample</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
