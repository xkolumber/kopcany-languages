import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <h2 className="text-black">Partneri</h2>
      <p className="text-black">Toto sú naši partneri</p>
      <div className="partners">
        <Image
          src="/partner1.jpg"
          width={600}
          height={100}
          alt="foto1"
          className="partner_img"
        />
        <Image
          src="/partner2.jpg"
          width={200}
          height={100}
          alt="foto1"
          className="partner_img"
        />
        <Image
          src="/partner3.jpg"
          width={200}
          height={100}
          alt="foto1"
          className="partner_img"
        />
      </div>
    </>
  );
};

export default Partners;
