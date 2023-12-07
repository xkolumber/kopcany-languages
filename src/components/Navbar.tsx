import Link from "next/link";
import Switcher from "./Switcher";
import NavbarMobile from "./NavbarMobile";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <>
      <div className="navbar">
        <Link href={`/${t.name}/about_project`}>
          <p> {t("about_project")}</p>
        </Link>
        <Link href={`/${t.name}/pamiatky-velkej-moravy`}>
          <p> {t("monuments")}</p>
        </Link>
        <Link href={`/${t.name}/theme/zazi-barokovu-krajinu`}>
          <p> {t("experience")}</p>
        </Link>
        <Link href={`/${t.name}/theme/po-stopach-t-g-masaryka`}>
          <p> {t("masaryk")}</p>
        </Link>
        <Link href={`/${t.name}/contact`}>
          <p> {t("contact")}</p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile />
    </>
  );
};

export default Navbar;
