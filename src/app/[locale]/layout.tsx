import { notFound } from "next/navigation";
import { ReactNode } from "react";

const locales = ["sk", "cz", "en"];

interface LocaleLayoutProps {
  children: ReactNode;
  locale: string;
}

const LocaleLayout = ({ children, locale }: LocaleLayoutProps) => {
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
};

export default LocaleLayout;
