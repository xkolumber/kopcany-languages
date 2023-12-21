'use client';

import { useLocale } from "next-intl";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import Switcher from "./Switcher";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface Props {
  navbar_array: string[];
}

const Navbar = ({ navbar_array }: Props) => {
  const locale = useLocale();


  const pathaname = usePathname();


  return (
    <>
      <div className="navbar">
        <Link href={`/`} >
          <p className={`${pathaname === `/${locale}` ? 'active_navbar_link' : ''} `}> {navbar_array[5]}</p>
        </Link>
        <Link href={`/${locale}/about_project`}>
          <p> {navbar_array[0]}</p>
        </Link>
        <Link href={`/${locale}/theme/pamiatky-velkej-moravy`}>
          <p> {navbar_array[1]}</p>
        </Link>
        <Link href={`/${locale}/baroque`}>
          <p> {navbar_array[2]}</p>
        </Link>
        <Link href={`/${locale}/theme/po-stopach-t-g-masaryka`}>
          <p> {navbar_array[3]}</p>
        </Link>
        <Link href={`/${locale}/contact`}>
          <p> {navbar_array[4]}</p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile
        about_project={navbar_array[0]}
        monuments={navbar_array[1]}
        experience={navbar_array[2]}
        masaryk={navbar_array[3]}
        contact={navbar_array[4]}
        home={navbar_array[5]}
      />
    </>
  );
};

export default Navbar;
