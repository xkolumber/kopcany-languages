"use client";

import Image from "next/image";

import useLanguageStore from "@/app/cookieStore/store";
import BaroquePortableText from "@/components/BaroquePortableText";
import DPhotos from "@/components/DPhotos";
import GroupPictures from "@/components/GroupPictures";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import YouTubeVideo from "@/components/YoutubeVideo";
import { getBaroqueDataWithImages } from "@/lib/functions_server";
import { Baroque } from "@/lib/interface_baroque";
import { urlFor } from "@/lib/sanityImageUrl";
import { useQuery } from "@tanstack/react-query";
import AboutProjectLoading from "./AboutUs/AboutProjectLoading";

const BaroquePage = () => {
  const { language } = useLanguageStore();

  const { data, isLoading, error } = useQuery<Baroque | null>({
    queryKey: ["baroque_page"],
    queryFn: () => getBaroqueDataWithImages(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && <AboutProjectLoading />}
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
                priority
                style={{ objectFit: "cover" }}
                className="bg_image_dark"
              />
            </div>
            <NavbarSecond />
            <p>Kopčany - Holíč</p>
          </div>
          <div className="padding_content bg-white">
            <h1 className="text-black max-width-50">
              {data.nazov_temy[language as keyof typeof data.nazov_temy]}
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
                priority
                className="theme_product_img"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="youtube_video">
              {data.youtube_link && <YouTubeVideo url={data.youtube_link} />}
            </div>

            <h5 className="text-black padding-2rem">
              {" "}
              {
                data.text_pred_mapou[
                  language as keyof typeof data.text_pred_mapou
                ]
              }{" "}
            </h5>

            <Image
              src={urlFor(data.mapa).url()}
              alt="Mapa okolia Záhoria"
              width={1000}
              height={1000}
              priority
              className="full_width_image_mapa"
            />
            <div className="padding-2rem">
              <h3 className="text-black">
                {
                  data.nadpis_sekcie1[
                    language as keyof typeof data.nadpis_sekcie1
                  ]
                }{" "}
              </h3>
              <div className="text-black">
                <BaroquePortableText data={data} specify="popis_sekcie1" />
              </div>
            </div>
            <GroupPictures data={data} parameter="skupina_obrazkov" />

            <h3 className="text-black padding-2rem">
              {
                data.nadpis_sekcie2[
                  language as keyof typeof data.nadpis_sekcie2
                ]
              }{" "}
            </h3>
            <div className="text-black padding-2rem">
              <BaroquePortableText data={data} specify="popis_sekcie2" />
            </div>
            <GroupPictures data={data} parameter="skupina_obrazkov2" />

            <h3 className="text-black padding-2rem">
              {
                data.nadpis_sekcie3[
                  language as keyof typeof data.nadpis_sekcie3
                ]
              }{" "}
            </h3>
            <div className="text-black padding-2rem">
              <BaroquePortableText data={data} specify="popis_sekcie3" />
            </div>
            <div className="mt-40">
              <DPhotos url="/3d.jpg" />
            </div>

            <GroupPictures data={data} parameter="skupina_obrazkov3" />

            <Partners />
          </div>
        </>
      )}
    </>
  );
};

export default BaroquePage;
