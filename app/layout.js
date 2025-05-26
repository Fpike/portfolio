import { DM_Sans, } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "Frankie Pike",
  description: "Full-stack Software Developer and Graphic & UI Designer",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
