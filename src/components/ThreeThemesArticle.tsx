"use client";

import { useEffect, useState } from "react";
import ThemesArticle from "./ThemesArticle";
import { Theme } from "@/lib/interface_theme";
import { Baroque } from "@/lib/interface_baroque";
import BaroqueArticle from "./BaroqueArticle";
import { ClipLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import { getHomePageBaroque, getHomePageThemes } from "@/lib/functions_server";

const ThreeThemesArticle = () => {
  const { data, error, isLoading } = useQuery<Theme[] | null>({
    queryKey: ["home_page_themes"],
    queryFn: () => getHomePageThemes(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const { data: baroque_data } = useQuery<Baroque | null>({
    queryKey: ["home_page_baroque"],
    queryFn: () => getHomePageBaroque(),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

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

  return (
    <>
      <div className="three_themes">
        {isLoading && (
          <ClipLoader size={40} color={"#000000"} loading={isLoading} />
        )}

        {error && <p>Chyba pri načítaní dát.</p>}
        {data &&
          data.map((theme) => <ThemesArticle key={theme._id} theme={theme} />)}

        {baroque_data && (
          <BaroqueArticle key={baroque_data._id} baroque={baroque_data} />
        )}
      </div>
    </>
  );
};

export default ThreeThemesArticle;
