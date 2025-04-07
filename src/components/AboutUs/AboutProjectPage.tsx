"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { getAboutProject, getPhotosAboutUs } from "@/lib/functions_server";
import { About_project } from "@/lib/interface_about_project";
import { translations } from "@/lib/languages";
import { urlFor } from "@/lib/sanityImageUrl";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import DPhotos from "../DPhotos";
import GroupPictures from "../GroupPictures";
import NavbarSecond from "../NavbarSecond";
import Partners from "../Partners";
import YouTubeVideo from "../YoutubeVideo";
import AboutPortableText from "./AboutPortableText";
import AboutProjectLoading from "./AboutProjectLoading";

const AboutProjectPage = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const { data, error, isLoading } = useQuery<About_project>({
    queryKey: ["home_page_about"],
    queryFn: () => getAboutProject(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<any>({
    queryKey: ["home_page_about_photos"],
    queryFn: () => getPhotosAboutUs(),
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
            <NavbarSecond />
            <p>Mikulčice - Kopčany - Holíč - Hodonín</p>
          </div>
          <div className="padding_content bg-white">
            <h1 className="text-black max-width-50">
              {data.nazov_temy[language as keyof typeof data.nazov_temy]}
            </h1>
            <div className="text_picture">
              <p className="text-black italic max-width-50">
                {
                  data.financovanie_text[
                    language as keyof typeof data.nazov_temy
                  ]
                }
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
            <h5 className="text-black">
              {" "}
              {t.about_project.project_description}
            </h5>
            <p className="text-black max-width-50 margin-bottom-10 ">
              {data.uvodny_text[language as keyof typeof data.nazov_temy]}
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
                <h4 className="text-black">{t.about_project.project_goal}</h4>
                <p className="text-black">
                  {data.projekt_ciel[language as keyof typeof data.nazov_temy]}
                </p>
              </div>
              <div className="about_width_section">
                <h4 className="text-black">{t.about_project.project_result}</h4>
                <p className="text-black">
                  {
                    data.projekt_vysledok[
                      language as keyof typeof data.nazov_temy
                    ]
                  }
                </p>
              </div>
            </div>

            <div className="about_two_section">
              <div className="about_width_section">
                <h4 className="text-black">
                  {t.about_project.project_activity}
                </h4>
                <p className="text-black">
                  <AboutPortableText data={data} specify="projekt_aktivity" />
                </p>
              </div>
              <div className="about_width_section">
                <h4 className="text-black ">
                  {t.about_project.project_activity_main}
                </h4>
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

            {data2 && (
              <GroupPictures data={data2} parameter="skupina_obrazkov" />
            )}

            <h4 className="text-black mt-40">
              {t.about_project.project_budget}
            </h4>
            <AboutPortableText data={data} specify="rozpocet" />

            <Partners />
          </div>
        </>
      )}
    </>
  );
};

export default AboutProjectPage;
