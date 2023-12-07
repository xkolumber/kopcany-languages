import React from "react";
import Image from "next/image";

const MapSection = () => {
  return (
    <>
      <Image
        src="/kopcany_video.jpg"
        alt="Video z Kopcian"
        layout="responsive"
        width={500}
        height={500}
      />

      <h2 className="text-black">Mapa</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Image
        src="/mapa.png"
        alt="Mapa okolia Záhoria"
        layout="responsive"
        width={500}
        height={500}
      />
    </>
  );
};

export default MapSection;
