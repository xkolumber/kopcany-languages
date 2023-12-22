import ArchiveSection from "@/components/ArchiveSection";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import HomeIntro from "@/components/HomeIntro";
import MapSection from "@/components/MapSection";
import Partners from "@/components/Partners";
import Themes from "@/components/Themes";
import ThreeThemesArticle from "@/components/ThreeThemesArticle";
import { About_project } from "@/lib/interface_about_project";
import { Baroque } from "@/lib/interface_baroque";
import { Main_page } from "@/lib/interface_main_page";
import { Theme } from "@/lib/interface_theme";
import { client } from "@/lib/sanity";
import { getTranslations } from "next-intl/server";
import AboutProject from "../../components/AboutProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lávkou cez Moravu",
  description:
    "Preskúmajte a objavte hlavné oblasti histórie, ktoré charakterizujú našu lokalitu.",
  keywords: ["Lávkou cez Moravu", "Kopčany",  "Kopčany", "Hodonín", "Holíč", "Mikulčice"],
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

const page = async () => {
  const query = `*[_type=='themes']`;
  const data = (await client.fetch(query)) as Theme[];

  const query2 = `*[_type=='about_project']`;
  const data2 = (await client.fetch(query2)) as About_project[];

  const query3 =`*[_type == "baroque"][0]`;
  const data3 = (await client.fetch(query3)) as Baroque;

  const query4 =`*[_type == "homepage"][0]`;
  const data4 = (await client.fetch(query4)) as Main_page;

  const t = await getTranslations("home_page");
  const homePage_title = t("welcome");
  const homePage_connect = t("connect");
  const homePage_map = t("map");
  const homePage_map_title = t("map_description");

  const p = await getTranslations("navbar");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");
  const home = p("home");

  const navbar_array = [
    about_project,
    monuments,
    experience,
    masaryk,
    contact,
    home,
  ];


  const map_words = [homePage_map, homePage_map_title];

  return (
    <>
      <HomeIntro
        title={homePage_title}
        connect={homePage_connect}
        navbar_array={navbar_array}
      />
      <main className="bg-white">
        <div className="padding_content">
          <MapSection translation={map_words} data={data4} />
          <Themes />
          <ThreeThemesArticle themes={data} baroque={data3}/>
        </div>
        <Events />
        <div className="padding_content">
          <AboutProject data={data2} />
        </div>
        <ArchiveSection />
        <div className="padding_content">
          <Partners />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";

export default page;
