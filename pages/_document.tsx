import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=MuseoModerno:ital,wght@0,900;1,900&family=Zen+Kaku+Gothic+Antique:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        ;
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;