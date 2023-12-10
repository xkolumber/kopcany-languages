import Image from "next/image";

import { client } from "@/lib/sanity";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageAsset } from "@/lib/interface_photos";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = async () => {
  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <div className="skeleton_navbar">
          <Skeleton count={1} width={130} />
          <Skeleton count={1} width={130} />
          <Skeleton count={1} width={130} />
          <Skeleton count={1} width={130} />
          <Skeleton count={1} width={130} />
          <Skeleton count={1} width={130} />
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
