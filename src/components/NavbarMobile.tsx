"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useLocale } from "next-intl";
import Switcher from "./Switcher";
import { usePathname } from "next/navigation";

interface Props {
  home: string;
  about_project: string;
  monuments: string;
  experience: string;
  masaryk: string;
  contact: string;
  black?: boolean;
}

const NavbarMobile = ({
  home,
  about_project,
  monuments,
  experience,
  masaryk,
  contact,
  black,
}: Props) => {
  const locale = useLocale();
  const [clickedHamburger, setClickedHamburger] = useState(false);
  const toggleClickHamburger = () => {
    setClickedHamburger(!clickedHamburger);
  };

  const pathaname = usePathname();

  return (
    <div className="navbar-mobile">
      <GiHamburgerMenu
        onClick={toggleClickHamburger}
        className="hamburger text-black-imp"
      />
      {clickedHamburger && (
        <>
          <div className="expanded-navbar padding_content">
            <IoMdClose
              onClick={toggleClickHamburger}
              className="hamburger_close"
            />
            <Link href={`/`} onClick={toggleClickHamburger}>
              <p className={`${pathaname === `/` ? 'active_navbar_link' : ''} `}> {home}</p>
            </Link>

            <Link
              href={`/${locale}/about_project`}
              onClick={toggleClickHamburger}
            >
              <p className ={`${pathaname === `/${locale}/about_project` ? 'active_navbar_link' : ''}`}>{about_project}</p>
            </Link>
            <Link
              href={`/${locale}/theme/pamiatky-velkej-moravy`}
              onClick={toggleClickHamburger}
            >
               <p className ={`${pathaname === `/${locale}/theme/pamiatky-velkej-moravy` ? 'active_navbar_link' : ''}`}> {monuments}</p>
            </Link>
            <Link href={`/${locale}/baroque`} onClick={toggleClickHamburger}>
            <p className ={`${pathaname === `/${locale}/baroque` ? 'active_navbar_link' : ''}`}>{experience}</p>
            </Link>
            <Link
              href={`/${locale}/theme/po-stopach-t-g-masaryka`}
              onClick={toggleClickHamburger}
            >
               <p className ={`${pathaname ===  `/${locale}/theme/po-stopach-t-g-masaryka` ? 'active_navbar_link' : ''}`}> {masaryk}</p>
            </Link>
            <Link href={`/${locale}/contact`} onClick={toggleClickHamburger}>
            <p className ={`${pathaname ===  `/${locale}/contact`  ? 'active_navbar_link' : ''}`}> {contact}</p>
            </Link>
            <div className="grid gap-3">
              <Switcher />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarMobile;
