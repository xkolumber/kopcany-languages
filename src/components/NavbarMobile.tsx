"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const NavbarMobile = () => {
  const [clickedHamburger, setClickedHamburger] = useState(false);
  const toggleClickHamburger = () => {
    setClickedHamburger(!clickedHamburger);
    console.log("clicked");
  };
  return (
    <div className="navbar-mobile">
      <GiHamburgerMenu onClick={toggleClickHamburger} className="hamburger" />
      {clickedHamburger && (
        <>
          <div className="expanded-navbar padding_content">
            <IoMdClose
              onClick={toggleClickHamburger}
              className="hamburger_close"
            />
            <Link href="/">
              <p>O projekte</p>
            </Link>
            <Link href="/theme/pamiatky-velkej-moravy">
              <p>Pamiatky Veľkej Moravy</p>
            </Link>
            <Link href="/theme/zazi-barokovu-krajinu">
              <p>Zaži barokovú krajinu</p>
            </Link>
            <Link href="/theme/po-stopach-t-g-masaryka">
              <p>Po stopách T.G. Masaryka</p>
            </Link>
            <Link href="/contact">
              <p>Kontakt</p>
            </Link>
            <div className="grid gap-3">
              <Image
                src="/lang_sk.svg"
                alt="Slovensky jazyk"
                width={20}
                height={20}
              />
              <Image
                src="/lang_cz.svg"
                alt="Slovensky jazyk"
                width={20}
                height={20}
              />
              <Image
                src="/lang_en.svg"
                alt="Slovensky jazyk"
                width={20}
                height={20}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarMobile;
