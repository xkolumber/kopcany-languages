import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";

interface Props {
  theme: Theme;
}

const ThemesArticle = ({ theme }: Props) => {
  const locale = useLocale();
  return (
    <div className="theme">
      <Image
        src={urlFor(theme.titulna_foto).url()}
        alt="Mapa okolia Záhoria"
        width={300}
        height={300}
        quality={100}
        className="themee_img"
      />
      <Link href={`/${locale}/theme/${theme.slug.current}`}>
        <div className="themes_padding">
          <h5 className="text_limit_h4">
            {theme.nazov_temy[locale as keyof typeof theme.nazov_temy]}
          </h5>

          <p className="text_limit_p">
            {theme.uvodny_text[locale as keyof typeof theme.nazov_temy]}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ThemesArticle;
