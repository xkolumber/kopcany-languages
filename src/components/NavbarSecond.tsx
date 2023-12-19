import Link from "next/link";
import Switcher from "./Switcher";
import NavbarMobile from "./NavbarMobile";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  black?: boolean;
}

const NavbarSecond = ({ black }: Props) => {
  const t = useTranslations("navbar");

  const locale = useLocale();

  const home = t("home");
  const about_project = t("about_project");
  const monuments = t("monuments");
  const experience = t("experience");
  const masaryk = t("masaryk");
  const contact = t("contact");

  return (
    <>
      <div className="navbar ">
        <Link href={`/`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {t("home")}
          </p>
        </Link>
        <Link href={`/${locale}/about_project`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {t("about_project")}
          </p>
        </Link>
        <Link href={`/${locale}/theme/pamiatky-velkej-moravy`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {" "}
            {t("monuments")}
          </p>
        </Link>
        <Link href={`/${locale}/baroque`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {" "}
            {t("experience")}
          </p>
        </Link>
        <Link href={`/${locale}/theme/po-stopach-t-g-masaryka`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {" "}
            {t("masaryk")}
          </p>
        </Link>
        <Link href={`/${locale}/contact`}>
          <p className={`${black === true && "text-black-imp"} `}>
            {" "}
            {t("contact")}
          </p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile
        home={home}
        about_project={about_project}
        monuments={monuments}
        experience={experience}
        masaryk={masaryk}
        contact={contact}
        black={true}
      />
    </>
  );
};

export default NavbarSecond;
