"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";

const Switcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    router.replace(`/${lang}/${pathname.substring(4)}`);
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
            className={`${useLocale() === "sk" ? "active" : ""} languages_img`}
          />
        </span>
        <span onClick={() => switchLang("cz")}>
          <Image
            src="/lang_cz.svg"
            alt="Cesky jazyk"
            width={20}
            height={20}
            className={`${useLocale() === "cz" ? "active" : ""} languages_img`}
          />
        </span>
        <span onClick={() => switchLang("en")}>
          <Image
            src="/lang_en.svg"
            alt="Anglicky jazyk"
            width={20}
            height={20}
            className={`${useLocale() === "en" ? "active" : ""} languages_img`}
          />
        </span>
      </div>
    </>
  );
};

export default Switcher;
