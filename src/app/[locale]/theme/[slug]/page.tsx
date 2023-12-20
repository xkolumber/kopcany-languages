import Image from "next/image";

import Footer from "@/components/Footer";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { Theme } from "@/lib/interface_theme";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { useLocale } from "next-intl";
import YouTubeVideo from "@/components/YoutubeVideo";
import ThemePortableText from "@/components/ThemePortableText";
import DPhotos from "@/components/DPhotos";

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
            priority={true}
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
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_temy[locale as keyof typeof data.nazov_temy]}
        </h1>
        <div className="text_picture">
          <p className="text-black max-width-50">
            <ThemePortableText data={data} specify="uvodny_text" />
            {/* {data.uvodny_text[locale as keyof typeof data.nazov_temy]} */}
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

        <YouTubeVideo id="kmzpWM23rws" />

        <Image
          src={urlFor(data.mapa_oblastt).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image_mapa"
        />
        <p className="text-black">
          <ThemePortableText data={data} specify="pokracovanie_text" />
          {/* {data.pokracovanie_text[locale as keyof typeof data.nazov_temy]} */}
        </p>
        <DPhotos url="/3d.jpg" />

        {data2[0].skupina_obrazkov && (
          <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />
        )}

        {data.dalsia_foto && (
          <Image
            src={urlFor(data.dalsia_foto).url()}
            alt="Mapa okolia Záhoria"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        {data.komentar_fotka && (
          <p className="text-black">
            <ThemePortableText data={data} specify="komentar_fotka" />
            {/* {data.komentar_fotka[locale as keyof typeof data.nazov_temy]} */}
          </p>
        )}

        {data3[0].skupina_obrazkov2 && (
          <GroupPictures data={data3[0]} parameter="skupina_obrazkov2" />
        )}
        {data.komentar_skupina_obrazkov2 && (
          <p className="text-black">
            {
              <ThemePortableText
                data={data}
                specify="komentar_skupina_obrazkov2"
              />
              // data.komentar_skupina_obrazkov2[
              //   locale as keyof typeof data.nazov_temy
              // ]
            }
          </p>
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
          <p className="text-black">
            <ThemePortableText data={data} specify="komentar_fotka2" />
            {/* {data.komentar_fotka2[locale as keyof typeof data.nazov_temy]} */}
          </p>
        )}

        {data4[0].skupina_obrazkov_3 && (
          <GroupPictures data={data4[0]} parameter="skupina_obrazkov_3" />
        )}
        {data.komentar_skupina_obrazkov3 && (
          <p className="text-black">
            {
              <ThemePortableText
                data={data}
                specify="komentar_skupina_obrazkov3"
              />
              // data.komentar_skupina_obrazkov3[
              //   locale as keyof typeof data.nazov_temy
              // ]
            }
          </p>
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
            {/* {data.komentar_fotka3[locale as keyof typeof data.nazov_temy]} */}
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
