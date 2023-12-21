"use client";

import { useEffect, useState } from "react";
import ThemesArticle from "./ThemesArticle";
import { Theme } from "@/lib/interface_theme";
import { Baroque } from "@/lib/interface_baroque";
import BaroqueArticle from "./BaroqueArticle";

interface Props {
  themes: Theme[];
  baroque: Baroque;
}

const ThreeThemesArticle = ({ themes, baroque}: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let articlesToShow = 1;

  if (windowWidth >= 768 && windowWidth < 1024) {
    articlesToShow = 2;
  } else if (windowWidth >= 1024) {
    articlesToShow = 3;
  } else if (windowWidth >= 1400) {
    articlesToShow = 4;
  }
  const displayedThemes = themes.slice(0, 3);

  return (
    <>
      <div className="three_themes">
        {displayedThemes.map((theme) => (
          <ThemesArticle key={theme._id} theme={theme} />
        ))}
         <BaroqueArticle key={baroque._id} baroque={baroque} />
      </div>
    </>
  );
};

export default ThreeThemesArticle;
