import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Disable favicon requests */}
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="data:image/x-icon;,"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <script src="https://www.gstatic.com/assistant/interactivecanvas/api/interactive_canvas.min.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  console.log('LOADED', window.interactiveCanvas);
                });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
