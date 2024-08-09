"use client";

import { ImageAsset } from "@/lib/interface_photos";
import { urlFor } from "@/lib/sanityImageUrl";
import Image from "next/image";
import { useEffect, useState } from "react";
import ArrowLeftGallery from "./ArrowLeftGallery";
import ArrowRightGallery from "./ArrowRightGallery";

interface Props {
  data: any;
  parameter: string;
}
const GroupPictures = ({ data, parameter }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % data[parameter].length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + data[parameter].length) %
          data[parameter].length
      );
    }
  };

  const closeButton = () => {
    setSelectedImageIndex(null);
  };
  const closeGallery = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const galleryContainer = document.querySelector(
        ".custom-gallery-container"
      );

      if (
        galleryContainer &&
        !galleryContainer.contains(event.target as Node)
      ) {
        closeGallery();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {data.length > 0 && (
        <div className="skupina_obrazkov">
          {data[parameter].map((obrazok: ImageAsset, index: number) => (
            <div
              className="skupina_obrazok_img"
              onClick={() => setSelectedImageIndex(index)}
              key={obrazok.asset._id}
            >
              <Image
                key={obrazok.asset._id}
                src={urlFor(obrazok.asset.url).url()}
                alt="Additional photo"
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                className="theme_img"
                priority
              />
            </div>
          ))}
        </div>
      )}

      {selectedImageIndex !== null && (
        <>
          <div className="custom-gallery-overlay"> </div>
          <div className="custom-gallery-container">
            <div onClick={handlePrev} className="arrow-space">
              <ArrowLeftGallery />
            </div>
            {data[parameter][selectedImageIndex].asset._id && (
              <div className="custom-gallery">
                <Image
                  key={data[parameter][selectedImageIndex].asset._id}
                  src={urlFor(
                    data[parameter][selectedImageIndex].asset.url
                  ).url()}
                  alt={`Photo ${selectedImageIndex}`}
                  className="custom-gallery-image"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
            )}

            <div onClick={handleNext} className="arrow-space">
              <ArrowRightGallery />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GroupPictures;
