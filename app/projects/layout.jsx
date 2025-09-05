// generate layour with footer

import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mihalhayail | Projects",
};
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="26Upg6K7J5KNCVX-jF3nx0Dg7wQRIjuRFEk0JM2ZdZQ"
        />
      </Head>
      {children}
      <Footer />
    </>
  );
}
