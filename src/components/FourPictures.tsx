"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  onActiveDotChange: (dotNumber: number) => void;
  images: string[];
}

const FourPictures = ({ onActiveDotChange, images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setScale(1);
      setTimeout(() => setScale(1.05), 100);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    onActiveDotChange(currentImageIndex);
  }, [currentImageIndex, onActiveDotChange]);

  return (
    <div className="imageWrapper">
      {images.map((image, index) => (
        <div
          key={index}
          className="imageContainer"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: index === currentImageIndex ? 1 : 0,
            transition: "opacity 1s ease-in, transform 0.5s ease-in-out",
            transform: `scale(${index === currentImageIndex ? scale : 1})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="bgImage"
            width={1920}
            height={1080}
            priority
            quality={100}
          />
        </div>
      ))}
    </div>
  );
};

export default FourPictures;
