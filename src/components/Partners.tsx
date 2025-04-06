"use client";

import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";
import Image from "next/image";

const Partners = () => {
  const { language } = useLanguageStore();

  const t = translations[language];

  return (
    <>
      <h2 className="text-black partners_title">{t.partners.title}</h2>
      <p className="text-black"> {t.partners.description}: </p>
      <div className="partners">
        <Image
          src="/all_partners.jpg"
          alt="All Partners images"
          width={400}
          height={400}
          priority
          className="partners_img_phone"
        />

        <div className="partners_row">
          <Image
            src="/partner0.svg"
            alt="Parner 1 logo"
            width={600}
            height={100}
            priority
            className="partner_img_first"
          />
          <Image
            src="/partner1.svg"
            alt="Parner 1 logo"
            width={600}
            height={100}
            priority
            className="partner_img_second"
          />
        </div>
        <div className="partners_row2">
          <Image
            src="/partner2.jpg"
            alt="Parner 1 logo"
            width={200}
            height={100}
            priority
            className="partner_img_third"
          />
          <Image
            src="/partner3.svg"
            alt="Parner 1 logo"
            width={400}
            height={100}
            priority
            className="partner_img_fourth"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
