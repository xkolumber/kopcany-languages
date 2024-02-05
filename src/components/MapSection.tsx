"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import YouTubeVideo from "./YoutubeVideo";
import { Main_page } from "@/lib/interface_main_page";
import { urlFor } from "@/lib/sanityImageUrl";
import { isMobile } from "react-device-detect";
import { Manifest } from "next/dist/lib/metadata/types/manifest-types";
import { ClipLoader } from "react-spinners";

interface Props {
  translation: String[];
  // data:Main_page;
}

const MapSection = ({ translation }: Props) => {
  const [data, setData] = useState<Main_page | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

      if (isMobile) {
        if (
          relativeX >= 40 &&
          relativeX <= 70 &&
          relativeY >= 4 &&
          relativeY <= 26
        ) {
          router.push(`/${locale}/theme/po-stopach-t-g-masaryka`);
        }
        if (
          relativeX >= 5 &&
          relativeX <= 26 &&
          relativeY >= 41 &&
          relativeY <= 59
        ) {
          router.push(`/${locale}/theme/pamiatky-velkej-moravy`);
        }
        if (
          relativeX >= 69 &&
          relativeX <= 86 &&
          relativeY >= 47 &&
          relativeY <= 66
        ) {
          router.push(`/${locale}/baroque`);
        }
        if (
          relativeX >= 44 &&
          relativeX <= 64 &&
          relativeY >= 69 &&
          relativeY <= 88
        ) {
          router.push(`/${locale}/about_project`);
        }
      }
      if (!isMobile) {
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
          router.push(`/${locale}/baroque`);
        }
        if (
          relativeX >= 45 &&
          relativeX <= 59 &&
          relativeY >= 68 &&
          relativeY <= 87
        ) {
          router.push(`/${locale}/about_project`);
        }
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

  useEffect(() => {
    const fetchHomePageData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/get-home-page-data", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const products = await response.json();

        setData(products);

        if (response.ok) {
          setIsLoading(false);
        } else {
          console.error("failed");
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchHomePageData();
  }, []);

  return (
    <>
      {isLoading && (
        <ClipLoader size={40} color={"#32a8a0"} loading={isLoading} />
      )}

      <div className="youtube_video">
        {data && data.youtube_link && <YouTubeVideo url={data.youtube_link} />}
      </div>

      <h2 className="text-black">{translation[0]}</h2>
      <p className="max-600px text-black">{translation[1]}</p>
      {data && data.mapa && (
        <Image
          src={urlFor(data.mapa).url()}
          alt="Mapa okolia Záhoria"
          width={0}
          height={0}
          sizes="100vw"
          className="mapa_img"
          useMap="#cityMap"
          id="mapImage"
        />
      )}
    </>
  );
};

export default MapSection;
