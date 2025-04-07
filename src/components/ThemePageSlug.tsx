"use client";
import Image from "next/image";

import { urlFor } from "@/lib/sanityImageUrl";

import useLanguageStore from "@/app/cookieStore/store";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { getThemeData } from "@/lib/functions_server";
import { Theme } from "@/lib/interface_theme";
import { useQuery } from "@tanstack/react-query";
import AboutProjectLoading from "./AboutUs/AboutProjectLoading";
import DPhotos from "./DPhotos";
import GroupPictures from "./GroupPictures";
import ThemePortableText from "./ThemePortableText";
import YouTubeVideo from "./YoutubeVideo";

interface Props {
  slug: string;
}

const ThemePageSlug = ({ slug }: Props) => {
  const { data, error, isLoading } = useQuery<Theme>({
    queryKey: ["theme", slug],
    queryFn: () => getThemeData(slug),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { language } = useLanguageStore();

  return (
    <>
      {isLoading && <AboutProjectLoading />}
      {error && <p>Chyba pri načítaní dát.</p>}
      {data && (
        <>
          <div className="titulna_foto intro_padding">
            <Image
              src={urlFor(data.titulna_foto).url()}
              alt=""
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
                style={{ objectFit: "cover" }}
                className="bg_image_dark"
              />
            </div>
            <NavbarSecond />
            {slug === "po-stopach-t-g-masaryka" && <p>Kopčany - Hodonín</p>}
            {slug === "pamiatky-velkej-moravy" && <p>Mikulčice - Kopčany</p>}
          </div>
          <div className="padding_content bg-white">
            <h1 className="text-black">
              {data.nazov_temy[language as keyof typeof data.nazov_temy]}
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
            {slug === "po-stopach-t-g-masaryka" && (
              <DPhotos url="/3d_tomas.jpg" />
            )}
            {slug === "pamiatky-velkej-moravy" && (
              <DPhotos url="/3d_pamiatky.jpg" />
            )}

            {data.skupina_obrazkov && (
              <GroupPictures data={data} parameter="skupina_obrazkov" />
            )}

            {data.komentar_skupina_obrazkov && (
              <div className="text-black  mt-40">
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
              <div className="text-black mt-40">
                <ThemePortableText data={data} specify="komentar_fotka2" />
              </div>
            )}

            {data.skupina_obrazkov2 && (
              <GroupPictures data={data} parameter="skupina_obrazkov2" />
            )}

            {data.komentar_skupina_obrazkov2 && (
              <div className="text-black mt-40">
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
              <div className="text-black mt-40">
                <ThemePortableText data={data} specify="komentar_fotka2" />
              </div>
            )}

            {data.skupina_obrazkov_3 && (
              <GroupPictures data={data} parameter="skupina_obrazkov_3" />
            )}

            {data.komentar_skupina_obrazkov3 && (
              <div className="text-black mt-40">
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
        </>
      )}
    </>
  );
};

export default ThemePageSlug;
