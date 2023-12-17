"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

interface Props {
  translation: String[];
}

const MapSection = ({ translation }: Props) => {
  const locale = useLocale();
  const router = useRouter();
  useEffect(() => {
    const image = document.getElementById("mapImage") as HTMLImageElement;

    function handleImageClick(event: MouseEvent) {
      const rect = image.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const imageWidth = image.clientWidth;
      const imageHeight = image.clientHeight;

      const relativeX = (x / imageWidth) * 100;
      const relativeY = (y / imageHeight) * 100;

      console.log(`Clicked at (${relativeX}%, ${relativeY}%)`);

      if (
        relativeX >= 40 &&
        relativeX <= 70 &&
        relativeY >= 4 &&
        relativeY <= 26
      ) {
        router.push(`/${locale}/theme/po-stopach-t-g-masaryka`);
      }
      if (
        relativeX >= 29 &&
        relativeX <= 37 &&
        relativeY >= 39 &&
        relativeY <= 57
      ) {
        router.push(`/${locale}/theme/pamiatky-velkej-moravy`);
      }

      /*new*/
      if (
        relativeX >= 59 &&
        relativeX <= 68 &&
        relativeY >= 46 &&
        relativeY <= 65
      ) {
        router.push(`/${locale}/theme/zazi-barokovu-krajinu`);
      }
    }

    if (image) {
      image.addEventListener("click", handleImageClick);
      image.classList.add("clickable-area");

      return () => {
        image.removeEventListener("click", handleImageClick);
      };
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <>
      <Image
        src="/kopcany_video.jpg"
        alt="Video z Kopcian"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="video_intro"
      />

      <h2 className="text-black">{translation[0]}</h2>
      <p className="max-600px text-black">{translation[1]}</p>
      <Image
        src="/mapa.png"
        alt="Mapa okolia Záhoria"
        width={0}
        height={0}
        sizes="100vw"
        className="mapa_img"
        useMap="#cityMap"
        id="mapImage"
      />
    </>
  );
};

export default MapSection;
