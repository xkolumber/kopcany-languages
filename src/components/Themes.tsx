"use client";

import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";

const Themes = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <h2 className="text-black">{t.home_page.themes}</h2>
      <p className="text-black max-600px p-margin-bottom">
        {t.home_page.themes_description}
      </p>
    </>
  );
};

export default Themes;
