import CookieComponent from "@/components/CookieComponent";
import ScrollButtonTop from "@/components/ScrollButtonTop";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";
import Provider from "./provider-query/Provider";
import HydrationZustand from "@/components/HydrationZustand";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "100", "200", "800", "900"],
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
    <html lang="sk">
      <head>
        <GoogleAnalyticsScript />
      </head>

      <body className={montserrat.className}>
        <Provider>
          <ScrollButtonTop />
          <HydrationZustand>
            {children}
            <Footer />
          </HydrationZustand>
          <CookieComponent />
        </Provider>
      </body>
    </html>
  );
}
