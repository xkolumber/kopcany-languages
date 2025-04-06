"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Switcher from "./Switcher";

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
  const [clickedHamburger, setClickedHamburger] = useState(false);
  const toggleClickHamburger = () => {
    setClickedHamburger(!clickedHamburger);
  };

  const [blackColor, setBlackColor] = useState(false);
  useEffect(() => {
    if (black) {
      setBlackColor(true);
    }
  }, [black]);

  const pathaname = usePathname();

  return (
    <div className="navbar-mobile">
      <GiHamburgerMenu
        onClick={toggleClickHamburger}
        className={`hamburger ${
          blackColor ? "text-black-imp" : "text-white-imp"
        }`}
      />
      {clickedHamburger && (
        <>
          <div className="expanded-navbar padding_content">
            <IoMdClose
              onClick={toggleClickHamburger}
              className="hamburger_close"
            />
            <Link href={`/`} onClick={toggleClickHamburger}>
              <p
                className={`${pathaname === `/` ? "active_navbar_link" : ""} `}
              >
                {" "}
                {home}
              </p>
            </Link>

            <Link href={`/about_project`} onClick={toggleClickHamburger}>
              <p
                className={`${
                  pathaname === `/about_project` ? "active_navbar_link" : ""
                }`}
              >
                {about_project}
              </p>
            </Link>
            <Link
              href={`/theme/pamiatky-velkej-moravy`}
              onClick={toggleClickHamburger}
            >
              <p
                className={`${
                  pathaname === `/theme/pamiatky-velkej-moravy`
                    ? "active_navbar_link"
                    : ""
                }`}
              >
                {" "}
                {monuments}
              </p>
            </Link>
            <Link href={`/baroque`} onClick={toggleClickHamburger}>
              <p
                className={`${
                  pathaname === `/baroque` ? "active_navbar_link" : ""
                }`}
              >
                {experience}
              </p>
            </Link>
            <Link
              href={`/theme/po-stopach-t-g-masaryka`}
              onClick={toggleClickHamburger}
            >
              <p
                className={`${
                  pathaname === `/theme/po-stopach-t-g-masaryka`
                    ? "active_navbar_link"
                    : ""
                }`}
              >
                {" "}
                {masaryk}
              </p>
            </Link>
            <Link href={`/contact`} onClick={toggleClickHamburger}>
              <p
                className={`${
                  pathaname === `/contact` ? "active_navbar_link" : ""
                }`}
              >
                {" "}
                {contact}
              </p>
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
