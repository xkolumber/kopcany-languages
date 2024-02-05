import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { About_project } from "@/lib/interface_about_project";
import { urlFor } from "@/lib/sanityImageUrl";
import { getTranslations } from "next-intl/server";
import { client } from "@/lib/sanity";

interface Props {
  data: About_project[];
}

const AboutProject = async ({ data }: Props) => {
  const t = await getTranslations("home_page");
  const locale = useLocale();

  const query4 = `*[_type == "homepage"][0].text_o_projekte`;
  const preklad = (await client.fetch(query4)) as { [key: string]: string };

  return (
    <>
      <h2 className="text-black">{t("about_project")}</h2>
      <p className="max-600px text-black">{preklad[locale]}</p>
      <Link href={`/${locale}/about_project`}>
        <div className="btn btn--primary margin-bottom-button">
          {t("get_to_know")}
        </div>
      </Link>
      <Link href={`/${locale}/about_project`}>
        <img
          src={urlFor(data[0].titulna_foto).url()}
          alt=""
          className="video_intro"
        />
      </Link>
    </>
  );
};

export default AboutProject;
