import Image from "next/image";

import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import { About_project } from "../../../lib/interface_about_project";

async function getData() {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  return data;
}

const page = async () => {
  const data = (await getData()) as About_project;

  const locale = useLocale();

  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <Navbar />
        <Image
          src={urlFor(data.titulna_foto).url()}
          alt="Mapa okolia Záhoria"
          fill={true}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="text-black lg:w-3/6">
            {data.uvodny_text[locale as keyof typeof data.nazov_temy]}
          </p>
          <div className="lg:ml-4 lg:w-6/12">
            <Image
              src={urlFor(data.kresleny_obrazok).url()}
              alt="Mapa okolia Záhoria"
              width={300}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        <Image
          src={urlFor(data.foto_stred_clanku).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="w-full"
          style={{
            objectFit: "cover",
          }}
        />
        <p className="text-black">
          {data.pokracovanie_text[locale as keyof typeof data.nazov_temy]}
        </p>

        <Image
          src={urlFor(data.zaverecna_foto).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="w-full"
          style={{
            objectFit: "cover",
          }}
        />
        <Partners />
      </div>
    </>
  );
};

export default page;
