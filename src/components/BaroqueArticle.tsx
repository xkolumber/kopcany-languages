import Image from "next/image";

import useLanguageStore from "@/app/cookieStore/store";
import { Baroque } from "@/lib/interface_baroque";
import { urlFor } from "@/lib/sanityImageUrl";
import Link from "next/link";
import BaroquePortableText from "./BaroquePortableText";

interface Props {
  baroque: Baroque;
}

const BaroqueArticle = ({ baroque }: Props) => {
  const { language } = useLanguageStore();
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
      <Link href={`/baroque`}>
        <div className="themes_padding">
          <h5 className="text_limit_h4">
            {baroque.nazov_temy[language as keyof typeof baroque.nazov_temy]}
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
