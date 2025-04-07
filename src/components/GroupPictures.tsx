"use client";

import { ImageAsset } from "@/lib/interface_photos";
import { urlFor } from "@/lib/sanityImageUrl";
import Image from "next/image";
import { useState } from "react";

import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import NextJsImage from "../components/NextImage";

interface Props {
  data: any;
  parameter: string;
}
const GroupPictures = ({ data, parameter }: Props) => {
  const [open, setOpen] = useState(false);

  const [choosenAlbum, setChoosenAlbum] = useState<SlideImage[]>([]);

  const [initialSlide, setInitialSlide] = useState(0);

  const handleOpenGallery = (index: number) => {
    const transformedAlbum = data[parameter].map((file: any) => ({
      src: urlFor(file.asset.url).url(),
    }));
    setInitialSlide(index);
    setChoosenAlbum(transformedAlbum);
    setOpen(true);
  };

  return (
    <>
      <div className="skupina_obrazkov">
        {data[parameter].map((obrazok: ImageAsset, index: number) => (
          <div
            className="skupina_obrazok_img"
            onClick={() => handleOpenGallery(index)}
            key={obrazok.asset._id}
          >
            {obrazok.asset.url && (
              <Image
                key={obrazok.asset._id}
                src={urlFor(obrazok.asset.url).url()}
                alt="Additional photo"
                width={600}
                height={300}
                quality={100}
                className="theme_img"
                priority
              />
            )}
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={choosenAlbum}
          render={{ slide: NextJsImage }}
          index={initialSlide}
        />
      )}
    </>
  );
};

export default GroupPictures;
