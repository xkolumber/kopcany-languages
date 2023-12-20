import React, { useState } from "react";

const ArrowRightGallery = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <svg
      width="18"
      height="29"
      viewBox="0 0 18 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.63305 14.4998L0.207031 5.07375L4.98 0.300781L16.7925 12.1133C18.1105 13.4313 18.1105 15.5682 16.7925 16.8863L4.98 28.6988L0.207031 23.9258L9.63305 14.4998Z"
        fill={isHovered ? "#e8e8e8" : "white"}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      />
    </svg>
  );
};

export default ArrowRightGallery;
