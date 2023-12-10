import Image from "next/image";

import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import { About_project } from "../../../lib/interface_about_project";
import Footer from "@/components/Footer";
import { ImageAsset } from "@/lib/interface_photos";
import GroupPictures from "@/components/GroupPictures";

async function getData() {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getPhotos() {
  const query = `*[_type == "about_project"]{
  skupina_obrazkov[]{
         asset->{
      _id,
      url
    }
     }
}`;
  const data = await client.fetch(query);
  return data;
}

const Page = async () => {
  const data = (await getData()) as About_project;

  const data2 = await getPhotos();

  const locale = useLocale();

  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <div className="bg_image_wrapper">
          <Image
            src={urlFor(data.titulna_foto).url()}
            alt="Mapa okolia Záhoria"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <Navbar />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <p className="text-black ">
            {data.uvodny_text[locale as keyof typeof data.nazov_temy]}
          </p>

          <Image
            src={urlFor(data.kresleny_obrazok).url()}
            alt="Mapa okolia Záhoria"
            width={300}
            height={200}
            className="theme_product_img"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <Image
          src={urlFor(data.foto_stred_clanku).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image"
          style={{
            objectFit: "cover",
          }}
        />
        <p className="text-black">
          {data.pokracovanie_text[locale as keyof typeof data.nazov_temy]}
        </p>

        <Image
          src={urlFor(data.mapa).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image_mapa"
        />

        <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />

        <Partners />
      </div>
      <Footer />
    </>
  );
};

export default Page;
