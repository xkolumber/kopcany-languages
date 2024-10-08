import Image from "next/image";

import AboutPortableText from "@/components/AboutPortableText";
import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { About_project } from "../../../lib/interface_about_project";
import YouTubeVideo from "@/components/YoutubeVideo";
import DPhotos from "@/components/DPhotos";
import { Metadata } from "next";

const dynamicImageUrl = async () => {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  const src = urlFor(data.titulna_foto).url();
  return src;
};
const dynamicDescription = async () => {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  const text = data.financovanie_text["sk"];
  return text;
};

const generateMetadata = async () => {
  const imageUrl = await dynamicImageUrl();
  const descriptionText = await dynamicDescription();

  return {
    title: "O projekte",
    description: descriptionText,
    openGraph: {
      title: "O projekte",
      description: descriptionText,
      images: [
        {
          url: imageUrl,
          alt: "O projekte",
        },
      ],
    },
  };
};

export const metadata: Promise<Metadata> = generateMetadata();

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
  const t = await getTranslations("about_project");
  const data = (await getData()) as About_project;

  const data2 = await getPhotos();

  const locale = useLocale();

  const p = await getTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  const navbar_array = [
    home,
    about_project,
    monuments,
    experience,
    masaryk,
    contact,
  ];

  return (
    <>
      <div className="titulna_foto intro_padding">
        <Image
          src={urlFor(data.titulna_foto).url()}
          alt="Main picture"
          width={1920}
          height={1080}
          priority
          quality={100}
          className="bg_image_wrapper"
        />
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            priority
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <NavbarSecond navbar_array={navbar_array} />
        <p>Mikulčice - Kopčany - Holíč - Hodonín</p>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black max-width-50">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <p className="text-black italic max-width-50">
            {data.financovanie_text[locale as keyof typeof data.nazov_temy]}
          </p>

          <Image
            src={urlFor(data.kresleny_obrazok).url()}
            alt="Mapa okolia Záhoria"
            width={300}
            height={200}
            className="theme_product_img"
            priority
            quality={100}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <h5 className="text-black"> {t("project_description")}</h5>
        <p className="text-black max-width-50 margin-bottom-10 ">
          {data.uvodny_text[locale as keyof typeof data.nazov_temy]}
        </p>

        {data.youtube_link && <YouTubeVideo url={data.youtube_link} />}

        <Image
          src={urlFor(data.mapa).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          priority
          quality={100}
          className="full_width_image_mapa"
        />
        <div className="about_two_section margin-bottom-10">
          <div className="about_width_section">
            <h4 className="text-black">{t("project_goal")}</h4>
            <p className="text-black">
              {data.projekt_ciel[locale as keyof typeof data.nazov_temy]}
            </p>
          </div>
          <div className="about_width_section">
            <h4 className="text-black">{t("project_result")}</h4>
            <p className="text-black">
              {data.projekt_vysledok[locale as keyof typeof data.nazov_temy]}
            </p>
          </div>
        </div>

        <div className="about_two_section">
          <div className="about_width_section">
            <h4 className="text-black">{t("project_activity")}</h4>
            <p className="text-black">
              <AboutPortableText data={data} specify="projekt_aktivity" />
            </p>
          </div>
          <div className="about_width_section">
            <h4 className="text-black ">{t("project_activity_main")}</h4>
            <p className="text-black">
              <AboutPortableText
                data={data}
                specify="projekt_aktivity_hlavne"
              />
            </p>
          </div>
        </div>
        <div className="margin-top-10">
          <DPhotos url="/3d_about.jpg" />
        </div>

        <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />

        <h4 className="text-black mt-40">{t("project_budget")}</h4>
        <AboutPortableText data={data} specify="rozpocet" />

        <Partners />
      </div>
      <Footer />
    </>
  );
};
export const dynamic = "force-dynamic";

export default Page;
