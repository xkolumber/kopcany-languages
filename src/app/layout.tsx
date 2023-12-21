import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ScrollButtonTop from "@/components/ScrollButtonTop";

interface HTMLProps extends React.HTMLProps<HTMLBodyElement> {}

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
