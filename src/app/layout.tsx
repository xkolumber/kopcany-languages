import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ScrollButtonTop from "@/components/ScrollButtonTop";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

interface HTMLProps extends React.HTMLProps<HTMLBodyElement> {}

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lávkou cez Moravu",
  description:
  "Preskúmajte a objavte hlavné oblasti histórie, ktoré charakterizujú našu lokalitu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
       <GoogleAnalyticsScript />
      <body className={montserrat.className}>
      <ScrollButtonTop />
        {children}

      </body>
    </html>
  );
}
