import { useRouter } from "next/router";

// components
import Head from "next/head";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Muslimify - Web Based Quran</title>
      </Head>
      <Header />
      <main className="main">{children}</main>
      <Navbar />
      <Footer />
      <ScrollToTop />
    </>
  );
}
