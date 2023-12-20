"use client";
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

interface Props {
  url: string;
}

const DPhotos = ({ url }: Props) => {
  return (
    <ReactPhotoSphereViewer
      src={url}
      height={"50vh"}
      width={"100%"}
    ></ReactPhotoSphereViewer>
  );
};

export default DPhotos;
