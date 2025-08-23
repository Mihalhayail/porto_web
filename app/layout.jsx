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
  title: "Mihalhayail | Portofolio",

  description:
    "My name is Mihalhayail, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",

  author: "Mihalhayail",
  siteUrl: "https://www.mihalhayail.my.id",
  applicationName: "Mihalhayail",

  keywords: [
    "mihalhayail",
    "mihal",
    "mihal hayail",
    "hayail",
    "mihalhayail portofolio",
    "mihalhayail portofolio website",
    "bloodfallen",
    "mohal porto",
    "mihal haya",
  ],

  openGraph: {
    type: "website",
    url: "https://www.mihalhayail.my.id",
    title: "Mihalhayail | Portofolio",
    site_name: "Mihalhayail | Portofolio",
    description: "My name is Mihalhayail, This is my portofolio website.",
    width: 1200,
    height: 630,
    images: [
      {
        url: "/og-image-rev.png",
        alt: "Mihalhayail Portofolio",
      },
    ],
    site_name: "Mihalhayail | Portofolio",
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
