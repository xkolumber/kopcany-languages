"use client";
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const DPhotos = () => {
  return (
    <ReactPhotoSphereViewer
      src="./mikulcice360.jpg"
      height={"100vh"}
      width={"100%"}
    ></ReactPhotoSphereViewer>
  );
};

export default DPhotos;
