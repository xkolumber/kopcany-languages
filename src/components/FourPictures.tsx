"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FourPictures = () => {
  const images = [
    "/about_project.jpg",
    "/kopcany_uvod.jpg",
    "/kopcany_video.jpg",
    "/kopcany_uvod.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Image
      src={images[currentImageIndex]}
      alt={`Image ${currentImageIndex + 1}`}
      fill={true}
      style={{ objectFit: "cover" }}
      className="bg_image"
    />
  );
};

export default FourPictures;
