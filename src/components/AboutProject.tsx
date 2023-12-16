import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const AboutProject = () => {
  const locale = useLocale();
  return (
    <>
      <h2 className="text-black">O projekte</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Link href={`/${locale}/about_project`}>
        <div className="btn btn--primary">Zistiť viac</div>
      </Link>
      <Link href={`/${locale}/about_project`}>
        <Image
          src="/about_projectt.jpg"
          alt="O projekte"
          height={300}
          width={500}
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
