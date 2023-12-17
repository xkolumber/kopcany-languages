import Link from "next/link";
import Switcher from "./Switcher";
import NavbarMobile from "./NavbarMobile";
import { useLocale, useTranslations } from "next-intl";

const NavbarSecond = () => {
  const t = useTranslations("navbar");

  const locale = useLocale();

  const about_project = t("about_project");
  const monuments = t("monuments");
  const experience = t("experience");
  const masaryk = t("masaryk");
  const contact = t("contact");

  return (
    <>
      <div className="navbar">
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

        <Switcher />
      </div>
      <NavbarMobile
        about_project={about_project}
        monuments={monuments}
        experience={experience}
        masaryk={masaryk}
        contact={contact}
      />
    </>
  );
};

export default NavbarSecond;
