import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
  title: "Mihalhayail | Portfolio",

  description:
    "My name is Mihalhayail, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

  author: "Mihalhayail",
  siteUrl: "https://mihalhayail.vercel.app",
  applicationName: "Mihalhayail",

  keywords: [
    "mihalhayail",
    "mihal",
    "mihal hayail",
    "hayail",
    "mihalhayail portfolio",
    "mihalhayail portfolio website",
    "portfolio mihal hayail ",
    "mihal cv",
    "mihal haya",
  ],

  openGraph: {
    type: "website",
    url: "https://mihalhayail.vercel.app",
    title: "Mihalhayail | Portfolio",
    site_name: "Mihalhayail | Portfolio",
    description: "Hi, I am Mihalhayail, This is my portfolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Mihalhayail Portfolio",
      },
    ],
    site_name: "Mihalhayail | Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="26Upg6K7J5KNCVX-jF3nx0Dg7wQRIjuRFEk0JM2ZdZQ"
        />
      </head>
      <body>
        <ClientTopProgressBar />
        <Navbar />
        {children}
        <Chat />
        <Analytics />
      </body>
    </html>
  );
}
