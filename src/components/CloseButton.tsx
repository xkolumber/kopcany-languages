import React, { useState } from "react";

const CloseButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="custom-gallery-close"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.7627 33.7627L33.7627 5.7627L36.2376 8.23757L8.23757 36.2376L5.7627 33.7627Z"
        fill={isHovered ? "#e8e8e8" : "white"}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.2373 33.7627L8.2373 5.7627L5.76243 8.23757L33.7624 36.2376L36.2373 33.7627Z"
        fill={isHovered ? "#e8e8e8" : "white"}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      />
    </svg>
  );
};

export default CloseButton;
