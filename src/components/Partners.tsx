import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <h2 className="text-black partners_title">Partneri</h2>
      <p className="text-black">Toto sú naši partneri</p>
      <div className="partners">
        <Image
          src="/partner0.svg"
          width={100}
          height={50}
          alt="foto1"
          className="partner_img_first"
        />
        <Image
          src="/partner1__.svg"
          width={100}
          height={50}
          alt="foto1"
          className="partner_img_second"
        />
        <Image
          src="/partner2.jpg"
          width={100}
          height={50}
          alt="foto1"
          className="partner_img_third"
        />
        <Image
          src="/partner3.svg"
          width={100}
          height={50}
          alt="foto1"
          className="partner_img_fourth"
        />
      </div>
    </>
  );
};

export default Partners;
