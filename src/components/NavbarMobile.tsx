"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useLocale } from "next-intl";
import Switcher from "./Switcher";

interface Props {
  about_project: string;
  monuments: string;
  experience: string;
  masaryk: string;
  contact: string;
  black?: boolean;
}

const NavbarMobile = ({
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
            <Link
              href={`/${locale}/about_project`}
              onClick={toggleClickHamburger}
            >
              <p> {about_project}</p>
            </Link>
            <Link
              href={`/${locale}/theme/pamiatky-velkej-moravy`}
              onClick={toggleClickHamburger}
            >
              <p> {monuments}</p>
            </Link>
            <Link
              href={`/${locale}/theme/zazi-barokovu-krajinu`}
              onClick={toggleClickHamburger}
            >
              <p> {experience}</p>
            </Link>
            <Link
              href={`/${locale}/theme/po-stopach-t-g-masaryka`}
              onClick={toggleClickHamburger}
            >
              <p> {masaryk}</p>
            </Link>
            <Link href={`/${locale}/contact`} onClick={toggleClickHamburger}>
              <p> {contact}</p>
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
