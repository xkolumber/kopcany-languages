import React from "react";
import Image from "next/image";

const MapSection = () => {
  return (
    <>
      <Image
        src="/kopcany_video.jpg"
        alt="Video z Kopcian"
        height={300}
        width={500}
        style={{
          objectFit: "cover",
        }}
        className="video_intro"
      />

      <h2 className="text-black">Mapa</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Image
        src="/mapa.png"
        alt="Mapa okolia Záhoria"
        height={500}
        width={500}
        className="mapa_img"
      />
    </>
  );
};

export default MapSection;
