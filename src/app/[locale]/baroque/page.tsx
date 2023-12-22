import Image from "next/image";

import AboutPortableText from "@/components/AboutPortableText";
import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { Baroque } from "@/lib/interface_baroque";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale, useTranslations } from "next-intl";
import ThemePortableText from "@/components/ThemePortableText";
import BaroquePortableText from "@/components/BaroquePortableText";
import YouTubeVideo from "@/components/YoutubeVideo";
import DPhotos from "@/components/DPhotos";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

const dynamicImageUrl = async() => {
  const query = `*[_type == "baroque"][0]`;
  const data = await client.fetch(query);
  const src =  urlFor(data.titulna_foto).url()
  return src;
};

const generateMetadata = async () => {
  const imageUrl = await dynamicImageUrl();

  return {
  title: "Zaži barokovú krajinu",
  description:
    "Druhá polovica 18. storočia bola pre územie Kopčian, Holíča a Hodonína mimoriadne významná.",
  openGraph: {
    title: "Zaži barokovú krajinu",
    description:
    "Druhá polovica 18. storočia bola pre územie Kopčian, Holíča a Hodonína mimoriadne významná.",
    images: [
      {
        url: imageUrl,
        alt: "Zaži barokovú krajinu",
      },
    ],
  },}
};

export const metadata: Promise<Metadata> = generateMetadata();


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

  const p =  await getTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  
  const navbar_array = [home, about_project, monuments, experience, masaryk, contact];

  return (
    <>
      <div className="titulna_foto intro_padding">
      <img   src={urlFor(data.titulna_foto).url()} alt="" className="bg_image_wrapper" />
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <NavbarSecond  navbar_array={navbar_array} />
        <p>Kopčany - Holíč</p>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black max-width-50">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <div className="max-width-50">
          <BaroquePortableText data={data} specify="uvodny_text" />
          </div>

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

          <div className="youtube_video">
              <YouTubeVideo url={data.youtube_link} />
          </div>
      
        <h5 className="text-black padding-2rem">
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
        <div className="padding-2rem">
        <h3 className="text-black">
          {data.nadpis_sekcie1[locale as keyof typeof data.nadpis_sekcie1]}{" "}
        </h3>
        <div className="text-black">
          <BaroquePortableText data={data} specify="popis_sekcie1" />
        </div>
        </div>
        <GroupPictures data={data2} parameter="skupina_obrazkov" />

        <h3 className="text-black padding-2rem">
          {data.nadpis_sekcie2[locale as keyof typeof data.nadpis_sekcie2]}{" "}
        </h3>
        <div className="text-black padding-2rem">
          <BaroquePortableText data={data} specify="popis_sekcie2" />
        </div>
        <GroupPictures data={data3} parameter="skupina_obrazkov2" />

        <h3 className="text-black padding-2rem">
          {data.nadpis_sekcie3[locale as keyof typeof data.nadpis_sekcie3]}{" "}
        </h3>
        <div className="text-black padding-2rem">
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
