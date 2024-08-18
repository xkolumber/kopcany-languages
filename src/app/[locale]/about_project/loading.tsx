import Image from "next/image";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
            className="bg_image_dark"
          />
        </div>
        <div className="skeleton_navbar">
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
          <div className="skeleton_navbar_item">
            <Skeleton count={1} />
          </div>
        </div>
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black skeleton_nadpis">
          <Skeleton count={1} />
        </h1>
        <p className="text-black skeleton_text">
          <Skeleton count={8} />
        </p>
      </div>
    </>
  );
};

export default loading;
