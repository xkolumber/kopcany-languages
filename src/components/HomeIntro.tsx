import React from "react";
import Navbar from "./Navbar";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FourPictures from "./FourPictures";

const HomeIntro = () => {
  const t = useTranslations("home_page");

  return (
    <div className="relative grid home_intro">
      <div className="bg_image_wrapper">
        <FourPictures />
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
      <div className="padding_content intro_padding justify-between width_100">
        <Navbar />
        <div>
          <p>. . . .</p>
          <p className="intro_first">{t("welcome")}</p>
          <h3>Mikulčice - Kopčany - Holíč - Hodonín</h3>
          <p className="intro_second">{t("connect")}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
