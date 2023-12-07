import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["sk", "cz", "en"];

export default function LocaleLayout({ children, params: { locale } }) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
