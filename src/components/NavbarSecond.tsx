'use client';

import { useLocale } from "next-intl";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import Switcher from "./Switcher";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  black?: boolean;
  navbar_array:string[];
  
}

const NavbarSecond = ({ black,navbar_array }: Props) => {

  const [blackColor, setBlackColor] = useState(false);
  console.log(black);
  useEffect(() => {
    if(black) {
      setBlackColor(true);
    }
   
  }, [black]);
 
  const locale = useLocale();


  const pathaname = usePathname();



  return (
    <>
      <div className="navbar ">
      <Link href={`/`} >
          <p className={`${blackColor && "text-black-imp"} ${pathaname === `/` ? 'active_navbar_link' : ''} `}>
            {navbar_array[0]}
          </p>
        </Link>
        <Link href={`/${locale}/about_project`}>
          <p className={`${blackColor && "text-black-imp"} ${pathaname === `/${locale}/about_project` ? 'active_navbar_link' : ''}`}>
          {navbar_array[1]}
          </p>
        </Link>
        <Link href={`/${locale}/theme/pamiatky-velkej-moravy`}>
          <p className={`${blackColor && "text-black-imp"} ${pathaname === `/${locale}/theme/pamiatky-velkej-moravy` ? 'active_navbar_link' : ''}`}>
          {navbar_array[2]}
          </p>
        </Link>
        <Link href={`/${locale}/baroque`}>
          <p className={`${blackColor && "text-black-imp"}  ${pathaname === `/${locale}/baroque` ? 'active_navbar_link' : ''} `}>    
          {navbar_array[3]}
          </p>
        </Link>
        <Link href={`/${locale}/theme/po-stopach-t-g-masaryka`}>
          <p className={`${blackColor && "text-black-imp"}  ${pathaname === `/${locale}/theme/po-stopach-t-g-masaryka` ? 'active_navbar_link' : ''} `}>
          {navbar_array[4]}
          </p>
        </Link>
        <Link href={`/${locale}/contact`}>
          <p className={`${black === true && "text-black-imp"}  ${pathaname === `/${locale}/contact` ? 'active_navbar_link' : ''} `}>
          {navbar_array[5]}
          </p>
        </Link>

        <Switcher />
      </div>
      <NavbarMobile
        home= {navbar_array[0]}
        about_project= {navbar_array[1]}
        monuments= {navbar_array[2]}
        experience= {navbar_array[3]}
        masaryk= {navbar_array[4]}
        contact= {navbar_array[5]}
        black={true}
      />
    </>
  );
};

export default NavbarSecond;
