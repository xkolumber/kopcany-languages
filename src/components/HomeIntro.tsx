"use client";
import { client } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";
import FourPictures from "./FourPictures";
import Navbar from "./Navbar";

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
          <h4 className="font-weight-regular">{title}</h4>
          <h2>Mikulčice - Kopčany - Holíč - Hodonín</h2>
          <h4 className="font-weight-regular">{connect}</h4>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
