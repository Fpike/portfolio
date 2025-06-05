import { DM_Sans, } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})


export async function generateMetadata() {
  return {
    title: "Frankie Pike",
    description: "Full-stack Software Developer and Graphic & UI Designer",
    icons: {
      icon: '/favicon.svg',
    },
    openGraph: {
      title: "Frankie Pike",
      description: "Full-stack Software Developer and Graphic & UI Designer",
      url: "https://www.frankie-pike.com",
      siteName: "Frankie Pike",
      images: [
        {
          url: "https://www.frankie-pike.com/frankie_pike.png",
          width: 1200,
          height: 630,
          alt: "Frankie Pike Portfolio Preview",
        },
      ],
      type: "website",
    },
  };
}


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Frankie Pike"></meta>
      </Head>
      <body
        className={`${dmSans.className} antialiased overflow-x-hidden`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
