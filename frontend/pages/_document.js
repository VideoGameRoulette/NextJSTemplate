import { Html, Head, Main, NextScript } from 'next/document';

const bodyStyles = {
  background: 'black',
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
      </Head>
      <body style={bodyStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
