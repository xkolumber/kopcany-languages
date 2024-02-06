import Image from "next/image";

import DPhotos from "@/components/DPhotos";
import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import ThemePortableText from "@/components/ThemePortableText";
import YouTubeVideo from "@/components/YoutubeVideo";
import { Theme } from "@/lib/interface_theme";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { Metadata } from "next";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

const dynamicTitle = async (slug: string) => {
  const query = `*[_type == "themes" && slug.current == "${slug}"][0].nazov_temy['sk']`;
  const data = await client.fetch(query);
  return data;
};

const dynamicImageUrl = async (slug: string) => {
  const query = `*[_type == "themes" && slug.current ==  "${slug}"][0]`;
  const data = await client.fetch(query);
  const src = urlFor(data.titulna_foto).url();
  return src;
};
const dynamicDescription = async (slug: string) => {
  const query = `*[_type == "themes" && slug.current ==  "${slug}"].uvodny_text[0].content[0].children[0].text`;
  const data = await client.fetch(query);
  const stringData = String(data);
  return stringData.substring(0, Math.min(stringData.length, 80));
};

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await dynamicTitle(params.slug);
  const imageUrl = await dynamicImageUrl(params.slug);
  const dynamicText = await dynamicDescription(params.slug);

  return {
    title: title,
    description: dynamicText,
    openGraph: {
      title: title,
      description: dynamicText,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
  };
};

async function getData(slug: string) {
  const query = `*[_type == "themes" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}
async function getPhotos(slug: string, skupina_obrazkov: string) {
  const query = `*[_type == "themes" && slug.current == "${slug}"]{
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

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Theme;
  const data2 = await getPhotos(params.slug, "skupina_obrazkov");
  const data3 = await getPhotos(params.slug, "skupina_obrazkov2");
  const data4 = await getPhotos(params.slug, "skupina_obrazkov_3");

  const locale = useLocale();

  const t = await getTranslations("navbar");

  const home = t("home");
  const about_project = t("about_project");
  const monuments = t("monuments");
  const experience = t("experience");
  const masaryk = t("masaryk");
  const contact = t("contact");

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
        <img
          src={urlFor(data.titulna_foto).url()}
          alt=""
          className="bg_image_wrapper"
        />
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <NavbarSecond navbar_array={navbar_array} />
        {params.slug === "po-stopach-t-g-masaryka" && <p>Kopčany - Hodonín</p>}
        {params.slug === "pamiatky-velkej-moravy" && <p>Mikulčice - Kopčany</p>}
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <p className="text-black max-width-50">
            <ThemePortableText data={data} specify="uvodny_text" />
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

        {data.youtube_link && <YouTubeVideo url={data.youtube_link} />}

        <Image
          src={urlFor(data.mapa_oblastt).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image_mapa"
          quality={100}
        />
        <p className="text-black">
          <ThemePortableText data={data} specify="pokracovanie_text" />
        </p>
        {params.slug === "po-stopach-t-g-masaryka" && (
          <DPhotos url="/3d_tomas.jpg" />
        )}
        {params.slug === "pamiatky-velkej-moravy" && (
          <DPhotos url="/3d_pamiatky.jpg" />
        )}

        {data2[0].skupina_obrazkov && (
          <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />
        )}
        {data.komentar_skupina_obrazkov && (
          <div className="text-black">
            <ThemePortableText
              data={data}
              specify="komentar_skupina_obrazkov"
            />
          </div>
        )}

        {data.dalsia_foto2 && (
          <Image
            src={urlFor(data.dalsia_foto2).url()}
            alt="Mapa okolia Záhoria"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        {data.komentar_fotka2 && (
          <div className="text-black">
            <ThemePortableText data={data} specify="komentar_fotka2" />
          </div>
        )}

        {data3[0].skupina_obrazkov2 && (
          <GroupPictures data={data3[0]} parameter="skupina_obrazkov2" />
        )}
        {data.komentar_skupina_obrazkov2 && (
          <div className="text-black">
            {
              <ThemePortableText
                data={data}
                specify="komentar_skupina_obrazkov2"
              />
            }
          </div>
        )}

        {data.dalsia_foto2 && (
          <Image
            src={urlFor(data.dalsia_foto2).url()}
            alt="Historicka foto"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        {data.komentar_fotka2 && (
          <div className="text-black">
            <ThemePortableText data={data} specify="komentar_fotka2" />
          </div>
        )}

        {data4[0].skupina_obrazkov_3 && (
          <GroupPictures data={data4[0]} parameter="skupina_obrazkov_3" />
        )}
        {data.komentar_skupina_obrazkov3 && (
          <div className="text-black">
            {
              <ThemePortableText
                data={data}
                specify="komentar_skupina_obrazkov3"
              />
            }
          </div>
        )}

        {data.dalsia_foto3 && (
          <Image
            src={urlFor(data.dalsia_foto3).url()}
            alt="Historicka foto"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        {data.komentar_fotka3 && (
          <p className="text-black">
            <ThemePortableText data={data} specify="komentar_fotka3" />
          </p>
        )}

        <Partners />
      </div>
      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";

export default Page;
