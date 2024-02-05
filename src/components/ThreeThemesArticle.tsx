"use client";

import { useEffect, useState } from "react";
import ThemesArticle from "./ThemesArticle";
import { Theme } from "@/lib/interface_theme";
import { Baroque } from "@/lib/interface_baroque";
import BaroqueArticle from "./BaroqueArticle";
import { ClipLoader } from "react-spinners";

const ThreeThemesArticle = () => {
  const [themes, setThemes] = useState<Theme[] | null>(null);
  const [baroque, setBaroque] = useState<Baroque | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/get-home-page-themes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const themes = await response.json();

        setThemes(themes);

        if (response.ok) {
          setIsLoading(false);
        } else {
          console.error("failed");
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchThemes();
  }, []);

  useEffect(() => {
    const fetchBaroque = async () => {
      try {
        //setIsLoading(true);
        const response = await fetch("/api/get-home-page-baroque", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const baroque = await response.json();

        setBaroque(baroque);

        if (response.ok) {
          //setIsLoading(false);
        } else {
          console.error("failed");
        }
      } catch (error) {
        //setIsLoading(false);
      }
    };

    fetchBaroque();
  }, []);

  return (
    <>
      <div className="three_themes">
        {isLoading && (
          <ClipLoader size={40} color={"#32a8a0"} loading={isLoading} />
        )}
        {themes &&
          themes.map((theme) => (
            <ThemesArticle key={theme._id} theme={theme} />
          ))}

        {baroque && <BaroqueArticle key={baroque._id} baroque={baroque} />}
      </div>
    </>
  );
};

export default ThreeThemesArticle;
