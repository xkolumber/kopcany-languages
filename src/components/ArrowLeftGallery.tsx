import React, { useState } from "react";

const ArrowLeftGallery = () => {
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
        d="M8.36695 14.5002L17.793 23.9262L13.02 28.6992L1.2075 16.8867C-0.11052 15.5687 -0.11052 13.4318 1.2075 12.1137L13.02 0.301248L17.793 5.07422L8.36695 14.5002Z"
        fill={isHovered ? "#e8e8e8" : "white"}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      />
    </svg>
  );
};

export default ArrowLeftGallery;
