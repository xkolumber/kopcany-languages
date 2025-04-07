"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { getHomePageData } from "@/lib/functions_server";
import { Main_page } from "@/lib/interface_main_page";
import { hotspots, translations } from "@/lib/languages";
import { urlFor } from "@/lib/sanityImageUrl";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { ClipLoader } from "react-spinners";
import YouTubeVideo from "./YoutubeVideo";

const MapSection = () => {
  const { data, error, isLoading } = useQuery<Main_page | null>({
    queryKey: ["home_page_data"],
    queryFn: () => getHomePageData(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { language } = useLanguageStore();

  const t = translations[language];

  const router = useRouter();
  // useEffect(() => {
  //   if (!data || !data.mapa) return;

  //   const image = document.getElementById("mapImage") as HTMLImageElement;

  //   function handleImageClick(event: MouseEvent) {
  //     const rect = image.getBoundingClientRect();
  //     const x = event.clientX - rect.left;
  //     const y = event.clientY - rect.top;

  //     const imageWidth = image.clientWidth;
  //     const imageHeight = image.clientHeight;

  //     const relativeX = (x / imageWidth) * 100;
  //     const relativeY = (y / imageHeight) * 100;

  //     if (isMobile) {
  //       if (
  //         relativeX >= 40 &&
  //         relativeX <= 70 &&
  //         relativeY >= 4 &&
  //         relativeY <= 26
  //       ) {
  //         router.push(`/theme/po-stopach-t-g-masaryka`);
  //       }
  //       if (
  //         relativeX >= 5 &&
  //         relativeX <= 26 &&
  //         relativeY >= 41 &&
  //         relativeY <= 59
  //       ) {
  //         router.push(`/theme/pamiatky-velkej-moravy`);
  //       }
  //       if (
  //         relativeX >= 69 &&
  //         relativeX <= 86 &&
  //         relativeY >= 47 &&
  //         relativeY <= 66
  //       ) {
  //         router.push(`/baroque`);
  //       }
  //       if (
  //         relativeX >= 44 &&
  //         relativeX <= 64 &&
  //         relativeY >= 69 &&
  //         relativeY <= 88
  //       ) {
  //         router.push(`/about_project`);
  //       }
  //     } else {
  //       if (
  //         relativeX >= 40 &&
  //         relativeX <= 70 &&
  //         relativeY >= 4 &&
  //         relativeY <= 26
  //       ) {
  //         router.push(`/theme/po-stopach-t-g-masaryka`);
  //       }
  //       if (
  //         relativeX >= 29 &&
  //         relativeX <= 37 &&
  //         relativeY >= 39 &&
  //         relativeY <= 57
  //       ) {
  //         router.push(`/theme/pamiatky-velkej-moravy`);
  //       }
  //       if (
  //         relativeX >= 59 &&
  //         relativeX <= 68 &&
  //         relativeY >= 46 &&
  //         relativeY <= 65
  //       ) {
  //         router.push(`/baroque`);
  //       }
  //       if (
  //         relativeX >= 45 &&
  //         relativeX <= 59 &&
  //         relativeY >= 68 &&
  //         relativeY <= 87
  //       ) {
  //         router.push(`/about_project`);
  //       }
  //     }
  //   }

  //   if (image) {
  //     image.addEventListener("click", handleImageClick);
  //     image.classList.add("clickable-area");

  //     return () => {
  //       image.removeEventListener("click", handleImageClick);
  //     };
  //   }
  // }, [data]); // Only run after `data` is available
  return (
    <>
      <h2 className="text-black">{t.home_page.map}</h2>
      <p className="max-600px text-black">{t.home_page.map_description}</p>
      {isLoading && (
        <ClipLoader size={40} color={"#000000"} loading={isLoading} />
      )}

      {error && <p>Chyba pri načítaní dát.</p>}
      {data && data.mapa && (
        <div className="relative">
          <Image
            src={urlFor(data.mapa).url()}
            alt="Mapa okolia Záhoria"
            width={1920}
            height={1080}
            className="mapa_img"
            id="mapImage"
            priority
            quality={100}
          />

          {hotspots.map((spot, index) => (
            <div
              key={index}
              className="absolute border border-transparent hover:border-white group cursor-pointer rounded-[8px]"
              style={{
                left: spot.coords.left,
                top: spot.coords.top,
                width: spot.coords.width,
                height: spot.coords.height,
              }}
              onClick={() => router.push(spot.route)}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full px-2 py-1 bg-white text-black text-xl rounded shadow-md opacity-0 group-hover:opacity-100 transition">
                {spot.name}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="youtube_video">
        {data && data.youtube_link && <YouTubeVideo url={data.youtube_link} />}
      </div>
    </>
  );
};

export default MapSection;
