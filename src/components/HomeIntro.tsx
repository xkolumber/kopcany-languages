"use client";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";
import FourPictures from "./FourPictures";
import Navbar from "./Navbar";
import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";

const HomeIntro = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const [activeDot, setActiveDot] = useState(0);

  const news = [
    "/home_banner1.jpg",
    "/home_banner2.jpg",
    "/home_banner3.jpg",
    "/home_banner4.jpg",
    "/home_banner5.jpg",
  ];

  const handleActiveDotChange = (dotNumber: number) => {
    setActiveDot(dotNumber);
  };

  return (
    <div className="relative grid home_intro">
      <div className="bg_image_wrapper">
        <FourPictures onActiveDotChange={handleActiveDotChange} images={news} />
      </div>
      <div className="bg_image_dark_wrapper">
        <Image
          src="/dark.png"
          alt="Video z Kopcian"
          fill={true}
          style={{ objectFit: "cover" }}
          className="bg_image_dark"
          quality={100}
        />
      </div>
      <div className="padding_content intro_padding justify-between width_100">
        <Navbar navbar_array={t.navbar} />
        <div>
          <div className="dots">
            {news.map((item: any, index: any) => (
              <div
                key={index}
                className={`dot ${index === activeDot ? "active-dot" : ""}`}
              ></div>
            ))}
          </div>
          <h4 className="font-weight-regular">{t.home_page.welcome}</h4>
          <h2>Mikulčice - Kopčany - Holíč - Hodonín</h2>
          <h4 className="font-weight-regular">{t.home_page.connect}</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
