// Think of the _document.js as being the file where you
// focus on the layout of your application.
import { Html, Head, Main, NextScript } from "next/document";
// We import Components from NextJS for the Html, Head, etc.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
