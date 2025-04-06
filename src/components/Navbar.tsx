"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Switcher from "./Switcher";
import NavbarMobile from "./NavbarMobile";

interface Props {
  navbar_array: any;
}

const Navbar = ({ navbar_array }: Props) => {
  const pathaname = usePathname();

  return (
    <>
      <div className="navbar">
        <Link href={`/`}>
          <p className={`${pathaname === `/` ? "active_navbar_link" : ""} `}>
            {" "}
            {navbar_array.home}
          </p>
        </Link>
        <Link href={`/about_project`}>
          <p> {navbar_array.about_project}</p>
        </Link>
        <Link href={`/theme/pamiatky-velkej-moravy`}>
          <p> {navbar_array.monuments}</p>
        </Link>
        <Link href={`/baroque`}>
          <p> {navbar_array.experience}</p>
        </Link>
        <Link href={`/theme/po-stopach-t-g-masaryka`}>
          <p> {navbar_array.masaryk}</p>
        </Link>
        <Link href={`/contact`}>
          <p> {navbar_array.contact}</p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile
        about_project={navbar_array.about_project}
        monuments={navbar_array.monuments}
        experience={navbar_array.experience}
        masaryk={navbar_array.masaryk}
        contact={navbar_array.contact}
        home={navbar_array.home}
      />
    </>
  );
};

export default Navbar;
