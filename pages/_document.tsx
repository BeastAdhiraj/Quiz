import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <title>Secret Personality Quiz Game</title>
        <meta name="description" content="A humorous personality quiz built with Next.js" />
      </Head>
            <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
