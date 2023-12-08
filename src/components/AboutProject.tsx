import React from "react";
import Image from "next/image";

const AboutProject = () => {
  return (
    <>
      <h2 className="text-black">O projekte</h2>
      <p className="max-600px text-black">
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <Image
        src="/about_project.jpg"
        alt="O projekte"
        height={300}
        width={500}
        style={{
          objectFit: "cover",
        }}
        className="video_intro"
      />
    </>
  );
};

export default AboutProject;
