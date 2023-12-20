"use client";

import { ImageAsset } from "@/lib/interface_photos";
import { urlFor } from "@/lib/sanityImageUrl";
import Image from "next/image";
import { useState } from "react";
import ArrowLeftGallery from "./ArrowLeftGallery";
import ArrowRightGallery from "./ArrowRightGallery";
import CloseButton from "./CloseButton";

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

  return (
    <>
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
              width={300}
              height={300}
              quality={100}
              className="theme_img"
            />
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <>
          <div className="custom-gallery-overlay"> </div>
          <div className="custom-gallery-container">
            <div onClick={handlePrev} className="arrow-space">
              <ArrowLeftGallery />
            </div>
            <div className="custom-gallery">
              <img
                key={data[parameter][selectedImageIndex].asset._id}
                src={urlFor(
                  data[parameter][selectedImageIndex].asset.url
                ).url()}
                alt={`Photo ${selectedImageIndex}`}
                className="custom-gallery-image"
              />
            </div>

            <div onClick={handleNext} className="arrow-space">
              <ArrowRightGallery />
            </div>

            <div onClick={closeButton}>
              <CloseButton />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GroupPictures;
