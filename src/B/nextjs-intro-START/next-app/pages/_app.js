// Think of the _app.js as the "main" entry point for the
// pages - All of this is what's put in the <Main> "slot".
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
