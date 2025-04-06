import ArchiveSection from "@/components/ArchiveSection";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import HomeIntro from "@/components/HomeIntro";
import MapSection from "@/components/MapSection";
import Partners from "@/components/Partners";
import Themes from "@/components/Themes";
import ThreeThemesArticle from "@/components/ThreeThemesArticle";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import AboutProject from "../../components/AboutProject";

export const metadata: Metadata = {
  title: "Lávkou cez Moravu",
  description:
    "Preskúmajte a objavte hlavné oblasti histórie, ktoré charakterizujú našu lokalitu.",
  keywords: [
    "Lávkou cez Moravu",
    "Kopčany",
    "Kopčany",
    "Hodonín",
    "Holíč",
    "Mikulčice",
  ],
  openGraph: {
    title: "Lávkou cez Moravu",
    description:
      "Preskúmajte a objavte hlavné oblasti histórie, ktoré charakterizujú našu lokalitu.",
    images: [
      {
        url: "/home_banner1.jpg",
        alt: "Lávkou cez Moravu",
      },
    ],
  },
};

const Page = () => {
  // const t = useTranslations("home_page");
  // const homePage_title = t("welcome");
  // const homePage_connect = t("connect");
  // const homePage_map = t("map");
  // const homePage_map_title = t("map_description");
  // const homePage_about = t("about_project");
  // const homePage_get_to_know = t("get_to_know");

  // const p = useTranslations("navbar");
  // const about_project = p("about_project");
  // const monuments = p("monuments");
  // const experience = p("experience");
  // const masaryk = p("masaryk");
  // const contact = p("contact");
  // const home = p("home");

  // const navbar_array = [
  //   about_project,
  //   monuments,
  //   experience,
  //   masaryk,
  //   contact,
  //   home,
  // ];

  // const map_words = [homePage_map, homePage_map_title];

  // const about_project_translate = [homePage_about, homePage_get_to_know];

  return (
    <>
      <HomeIntro
      // title={homePage_title}
      // connect={homePage_connect}
      // navbar_array={navbar_array}
      />
      <main className="bg-white">
        <div className="padding_content">
          {/* <MapSection translation={map_words} /> */}
          {/* <Themes /> */}
          {/* <ThreeThemesArticle /> */}
        </div>
        {/* <Events />
        <div className="padding_content">
          <AboutProject translate_words={about_project_translate} />
        </div>
        <ArchiveSection />
        <div className="padding_content">
          <Partners />
        </div> */}
      </main>
    </>
  );
};

export default Page;
