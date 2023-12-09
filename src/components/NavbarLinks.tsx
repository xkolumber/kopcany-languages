import Link from "next/link";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

const NavbarLinks = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <>
      <Link href={`/${locale}/about_project`}>
        <p> {t("about_project")}</p>
      </Link>
      <Link href={`/${locale}/theme/pamiatky-velkej-moravy`}>
        <p> {t("monuments")}</p>
      </Link>
      <Link href={`/${locale}/theme/zazi-barokovu-krajinu`}>
        <p> {t("experience")}</p>
      </Link>
      <Link href={`/${locale}/theme/po-stopach-t-g-masaryka`}>
        <p> {t("masaryk")}</p>
      </Link>
      <Link href={`/${locale}/contact`}>
        <p> {t("contact")}</p>
      </Link>
    </>
  );
};

export default NavbarLinks;
