import ArchiveSection from "@/components/ArchiveSection";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import HomeIntro from "@/components/HomeIntro";
import MapSection from "@/components/MapSection";
import Partners from "@/components/Partners";
import Themes from "@/components/Themes";
import ThreeThemesArticle from "@/components/ThreeThemesArticle";
import { Interface_new } from "@/lib/interface_new";
import { Theme } from "@/lib/interface_theme";
import { client } from "@/lib/sanity";
import AboutProject from "../../components/AboutProject";
import { getTranslations } from "next-intl/server";
import { About_project } from "@/lib/interface_about_project";

const page = async () => {
  const query = `*[_type=='themes']`;
  const data = (await client.fetch(query)) as Theme[];

  const query2 = `*[_type=='about_project']`;
  const data2 = (await client.fetch(query2)) as About_project[];

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
          <MapSection translation={map_words} />
          <Themes />
          <ThreeThemesArticle themes={data} />
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
