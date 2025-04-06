"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { LanguageInterface } from "@/lib/all_interfaces";
import { getAboutProject } from "@/lib/functions_server";
import { About_project } from "@/lib/interface_about_project";
import { translations } from "@/lib/languages";
import { urlFor } from "@/lib/sanityImageUrl";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

const AboutProject = () => {
  const { language } = useLanguageStore();

  const t = translations[language];

  const { data, error, isLoading } = useQuery<About_project[] | null>({
    queryKey: ["home_page_about"],
    queryFn: () => getAboutProject(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      {isLoading && (
        <ClipLoader size={40} color={"#000000"} loading={isLoading} />
      )}
      {data && (
        <>
          <h2 className="text-black">{t.home_page.about_project}</h2>
          <p className=" text-black">
            {data[0].uvodny_text[language as keyof LanguageInterface]}{" "}
          </p>
          <Link href={`/about_project`}>
            <div className="btn btn--primary margin-bottom-button">
              {t.home_page.get_to_know}
            </div>
          </Link>
          <Link href={`/about_project`}>
            <Image
              src={urlFor(data[0].titulna_foto).url()}
              alt=""
              width={1920}
              height={1080}
              className="video_intro"
            />
          </Link>
        </>
      )}
    </>
  );
};

export default AboutProject;
