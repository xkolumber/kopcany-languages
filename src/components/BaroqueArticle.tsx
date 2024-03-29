import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import ThemePortableText from "./ThemePortableText";
import { Baroque } from "@/lib/interface_baroque";
import BaroquePortableText from "./BaroquePortableText";

interface Props {
  baroque: Baroque;
}

const BaroqueArticle = ({ baroque }: Props) => {
  const locale = useLocale();
  return (
    <div className="theme">
      <Image
        src={urlFor(baroque.titulna_foto).url()}
        alt="Mapa okolia Záhoria"
        width={300}
        height={300}
        quality={100}
        className="themee_img"
      />
      <Link href={`/${locale}/baroque`}>
        <div className="themes_padding">
          <h5 className="text_limit_h4">
            {baroque.nazov_temy[locale as keyof typeof baroque.nazov_temy]}
          </h5>

          <div className="text_limit_p">
            <BaroquePortableText
              data={baroque}
              specify="uvodny_text"
              view={true}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BaroqueArticle;
