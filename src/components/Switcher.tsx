"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";

const Switcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (lang: string) => {
    router.replace(`/${lang}/${pathname.substring(4)}`); // Optionally, navigate to the corresponding route
  };

  console.log(pathname);

  console.log(pathname.substring(4));

  return (
    <>
      <div className="languages">
        <span onClick={() => switchLang("sk")}>
          <Image
            src="/lang_sk.svg"
            alt="Slovensky jazyk"
            width={20}
            height={20}
          />
        </span>
        <span onClick={() => switchLang("cz")}>
          <Image src="/lang_cz.svg" alt="Cesky jazyk" width={20} height={20} />
        </span>
        <span onClick={() => switchLang("en")}>
          <Image
            src="/lang_en.svg"
            alt="Anglicky jazyk"
            width={20}
            height={20}
          />
        </span>
      </div>
    </>
  );
};

export default Switcher;
