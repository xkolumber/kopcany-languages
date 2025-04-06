"use client";

import useLanguageStore from "@/app/cookieStore/store";
import Image from "next/image";

const Switcher = () => {
  const { language, setLanguage } = useLanguageStore();

  const switchLang = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <>
      <div className="languages">
        <span onClick={() => switchLang("sk")}>
          <Image
            src="/lang_sk.svg"
            alt="Slovensky jazyk"
            width={20}
            height={20}
            className={`${language === "sk" ? "active" : ""} languages_img`}
            priority={true}
          />
        </span>
        <span onClick={() => switchLang("cz")}>
          <Image
            src="/lang_cz.svg"
            alt="Cesky jazyk"
            width={20}
            height={20}
            className={`${language === "cz" ? "active" : ""} languages_img`}
            priority={true}
          />
        </span>
        <span onClick={() => switchLang("en")}>
          <Image
            src="/lang_en.svg"
            alt="Anglicky jazyk"
            width={20}
            height={20}
            className={`${language === "en" ? "active" : ""} languages_img`}
            priority={true}
          />
        </span>
      </div>
    </>
  );
};

export default Switcher;
