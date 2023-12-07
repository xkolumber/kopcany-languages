import React from "react";
import Navbar from "./Navbar";

import Image from "next/image";
import { useTranslations } from "next-intl";

const HomeIntro = () => {
  const t = useTranslations("home_page");

  return (
    <div className="relative grid">
      <div className="bg_image_wrapper">
        <Image
          src="/kopcany_uvod.jpg"
          alt="Video z Kopcian"
          fill={true}
          style={{ objectFit: "cover" }}
          className="bg_image"
        />
      </div>
      <div className="bg_image_dark_wrapper">
        <Image
          src="/dark.png"
          alt="Video z Kopcian"
          fill={true}
          style={{ objectFit: "cover" }}
          className="bg_image_dark"
        />
      </div>
      <div className="padding_content intro_padding justify-between">
        <Navbar />
        <div>
          <p>. . . .</p>
          <p>Mikulčice - Kopčany - Holíč - Hodonín</p>
          <h1>{t("title")}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
