"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import FourPictures from "./FourPictures";
import { client } from "@/lib/sanity";
import { ImageAsset } from "@/lib/interface_photos";
import { urlFor } from "@/lib/sanityImageUrl";

async function getPhotos() {
  const query = `*[_type == "about_project"]{
  skupina_obrazkov[]{
         asset->{
      _id,
      url
    }
     }
}`;
  const data = await client.fetch(query);
  return data;
}
interface Props {
  title: string;
  connect: string;
  navbar_array: string[];
}

const HomeIntro = ({ title, connect, navbar_array }: Props) => {
  const [activeDot, setActiveDot] = useState(0);

  // const news = await getPhotos();

  const news = [
    "/about_project.jpg",
    "/kopcany_uvod.jpg",
    "/kopcany_video.jpg",
    "/kopcany_uvod.jpg",
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
        />
      </div>
      <div className="padding_content intro_padding justify-between width_100">
        <Navbar navbar_array={navbar_array} />
        <div>
          <div className="dots">
            {news.map((item: any, index: any) => (
              <div
                key={index}
                className={`dot ${index === activeDot ? "active-dot" : ""}`}
              ></div>
            ))}
          </div>
          <p className="intro_first">{title}</p>
          <h3>Mikulčice - Kopčany - Holíč - Hodonín</h3>
          <p className="intro_second">{connect}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
