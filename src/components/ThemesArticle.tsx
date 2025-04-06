import Image from "next/image";

import useLanguageStore from "@/app/cookieStore/store";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import Link from "next/link";
import ThemePortableText from "./ThemePortableText";

interface Props {
  theme: Theme;
}

const ThemesArticle = ({ theme }: Props) => {
  const { language } = useLanguageStore();
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
      <Link href={`/theme/${theme.slug.current}`}>
        <div className="themes_padding">
          <h5 className="text_limit_h4">
            {theme.nazov_temy[language as keyof typeof theme.nazov_temy]}
          </h5>

          <div className="text_limit_p">
            <ThemePortableText
              data={theme}
              specify="pokracovanie_text"
              view={true}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ThemesArticle;
