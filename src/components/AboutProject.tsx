import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { About_project } from "@/lib/interface_about_project";
import { urlFor } from "@/lib/sanityImageUrl";

interface Props {
  data: About_project[];
}

const AboutProject = ({ data }: Props) => {
  const t = useTranslations("home_page");
  const locale = useLocale();

  return (
    <>
      <h2 className="text-black">{t("about_project")}</h2>
      <p className="max-600px text-black">{t("about_project_description")}</p>
      <Link href={`/${locale}/about_project`}>
        <div className="btn btn--primary margin-bottom-button">Zistiť viac</div>
      </Link>
      <Link href={`/${locale}/about_project`}>
        <Image
          src={urlFor(data[0].titulna_foto).url()}
          alt="O projekte"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="video_intro"
          quality={100}
        />
      </Link>
    </>
  );
};

export default AboutProject;
