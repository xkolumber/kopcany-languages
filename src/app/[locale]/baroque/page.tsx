import Image from "next/image";

import AboutPortableText from "@/components/AboutPortableText";
import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { Baroque } from "@/lib/interface_baroque";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import ThemePortableText from "@/components/ThemePortableText";
import BaroquePortableText from "@/components/BaroquePortableText";
import YouTubeVideo from "@/components/YoutubeVideo";
import DPhotos from "@/components/DPhotos";

async function getData() {
  const query = `*[_type == "baroque"][0]`;
  const data = await client.fetch(query);
  return data;
}

async function getPhotos(skupina_obrazkov: string) {
  const query = `*[_type == "baroque"][0]{
  ${skupina_obrazkov}[]{
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
  const data = (await getData()) as Baroque;

  const data2 = await getPhotos("skupina_obrazkov");
  const data3 = await getPhotos("skupina_obrazkov2");
  const data4 = await getPhotos("skupina_obrazkov3");
  const locale = useLocale();

  return (
    <>
      <div className="titulna_foto intro_padding">
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
        <NavbarSecond />
        <p>Kopčany - Holíč</p>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black max-width-50">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <BaroquePortableText data={data} specify="uvodny_text" />

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

        <YouTubeVideo id="kmzpWM23rws" />
        <h5 className="text-black">
          {" "}
          {
            data.text_pred_mapou[locale as keyof typeof data.text_pred_mapou]
          }{" "}
        </h5>

        <Image
          src={urlFor(data.mapa).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image_mapa"
        />
        <h5 className="text-black">
          {data.nadpis_sekcie1[locale as keyof typeof data.nadpis_sekcie1]}{" "}
        </h5>
        <div className="text-black">
          <BaroquePortableText data={data} specify="popis_sekcie1" />
        </div>
        <GroupPictures data={data2} parameter="skupina_obrazkov" />

        <h5 className="text-black">
          {data.nadpis_sekcie2[locale as keyof typeof data.nadpis_sekcie2]}{" "}
        </h5>
        <div className="text-black">
          <BaroquePortableText data={data} specify="popis_sekcie2" />
        </div>
        <GroupPictures data={data3} parameter="skupina_obrazkov2" />

        <h5 className="text-black">
          {data.nadpis_sekcie3[locale as keyof typeof data.nadpis_sekcie3]}{" "}
        </h5>
        <div className="text-black">
          <BaroquePortableText data={data} specify="popis_sekcie3" />
        </div>
        <DPhotos url="/3d.jpg" />

        <GroupPictures data={data4} parameter="skupina_obrazkov3" />

        <Partners />
      </div>
      <Footer />
    </>
  );
};
export const dynamic = "force-dynamic";

export default Page;
