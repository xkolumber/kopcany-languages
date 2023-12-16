"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const MapSection = () => {
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
        height={300}
        width={500}
        style={{
          objectFit: "cover",
        }}
        className="video_intro"
      />

      <h2 className="text-black">Mapa</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Image
        src="/mapa.png"
        alt="Mapa okolia Záhoria"
        height={500}
        width={500}
        className="mapa_img"
        useMap="#cityMap"
        id="mapImage"
      />
      {/* <map name="cityMap">
        <area
          shape="circle"
          coords="50%,5%,10%"
          alt="City 1"
          href={`/${locale}/theme/po-stopach-t-g-masaryka`}
        />
      </map> */}
    </>
  );
};

export default MapSection;
