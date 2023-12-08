import { notFound } from "next/navigation";
import { ReactNode } from "react";

// Define the accepted locales
const locales = ["sk", "cz", "en"];

interface Props {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
