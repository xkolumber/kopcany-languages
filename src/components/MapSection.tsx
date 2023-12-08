import React from "react";
import Image from "next/image";

const MapSection = () => {
  return (
    <>
      <Image
        src="/kopcany_video.jpg"
        alt="Video z Kopcian"
        width={1000}
        height={1000}
        style={{ objectFit: "contain" }}
      />

      <h2 className="text-black">Mapa</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Image
        src="/mapa.png"
        alt="Mapa okolia Záhoria"
        width={1000}
        height={1000}
        style={{ objectFit: "contain" }}
      />
    </>
  );
};

export default MapSection;
