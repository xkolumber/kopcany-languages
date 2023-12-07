import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div>
      <h2 className="text-black">Partneri</h2>
      <p className="text-black">Toto sú naši partneri</p>
      <Image src="/partner1.jpg" width={600} height={100} alt="foto1" />
      <Image src="/partner2.jpg" width={200} height={100} alt="foto1" />
      <Image src="/partner3.jpg" width={200} height={100} alt="foto1" />
    </div>
  );
};

export default Partners;
