import { useLocale } from "next-intl";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";
import Switcher from "./Switcher";

interface Props {
  navbar_array: string[];
}

const Navbar = ({ navbar_array }: Props) => {
  const locale = useLocale();

  return (
    <>
      <div className="navbar">
        <Link href={`/${locale}/about_project`}>
          <p> {navbar_array[0]}</p>
        </Link>
        <Link href={`/${locale}/theme/pamiatky-velkej-moravy`}>
          <p> {navbar_array[1]}</p>
        </Link>
        <Link href={`/${locale}/theme/zazi-barokovu-krajinu`}>
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
      />
    </>
  );
};

export default Navbar;
