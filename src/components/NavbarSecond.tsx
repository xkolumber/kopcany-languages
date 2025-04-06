"use client";

import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import Switcher from "./Switcher";

interface Props {
  black?: boolean;
}

const NavbarSecond = ({ black }: Props) => {
  const [blackColor, setBlackColor] = useState(false);
  useEffect(() => {
    if (black) {
      setBlackColor(true);
    }
    console.log(blackColor);
  }, [black]);

  const pathaname = usePathname();

  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <div className={`navbar ${blackColor ? "navbar-black" : ""}`}>
        <Link href={`/`}>
          <p className={`} ${pathaname === `/` ? "active_navbar_link" : ""} `}>
            {t.navbar.home}
          </p>
        </Link>
        <Link href={`/about_project`}>
          <p
            className={`${blackColor ? "text-black-imp" : "text-white-imp"} ${
              pathaname === `/about_project` ? "active_navbar_link" : ""
            }`}
          >
            {t.navbar.about_project}
          </p>
        </Link>
        <Link href={`/theme/pamiatky-velkej-moravy`}>
          <p
            className={`${blackColor ? "text-black-imp" : "text-white-imp"} ${
              pathaname === `/theme/pamiatky-velkej-moravy`
                ? "active_navbar_link"
                : ""
            }`}
          >
            {t.navbar.monuments}
          </p>
        </Link>
        <Link href={`/baroque`}>
          <p
            className={`${blackColor ? "text-black-imp" : "text-white-imp"}  ${
              pathaname === `/baroque` ? "active_navbar_link" : ""
            } `}
          >
            {t.navbar.experience}
          </p>
        </Link>
        <Link href={`/theme/po-stopach-t-g-masaryka`}>
          <p
            className={`${blackColor ? "text-black-imp" : "text-white-imp"}  ${
              pathaname === `/theme/po-stopach-t-g-masaryka`
                ? "active_navbar_link"
                : ""
            } `}
          >
            {t.navbar.masaryk}
          </p>
        </Link>
        <Link href={`/contact`}>
          <p
            className={`${
              black === true ? "text-black-imp" : "text-white-imp"
            }  ${pathaname === `/contact` ? "active_navbar_link" : ""} `}
          >
            {t.navbar.contact}
          </p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile
        home={t.navbar.home}
        about_project={t.navbar.about_project}
        monuments={t.navbar.monuments}
        experience={t.navbar.experience}
        masaryk={t.navbar.masaryk}
        contact={t.navbar.contact}
        black={blackColor}
      />
    </>
  );
};

export default NavbarSecond;
