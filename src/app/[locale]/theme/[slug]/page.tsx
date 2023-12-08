import Image from "next/image";

import { client } from "@/lib/sanity";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

async function getData(slug: string) {
  const query = `*[_type == "themes" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Theme;
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
        <h1 className="text-black">{data.nazov_temy}</h1>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="text-black lg:w-3/6">{data.uvodny_text}</p>
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
        <p className="text-black">{data.pokracovanie_text}</p>

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
      <Footer />
    </>
  );
};

export default page;
