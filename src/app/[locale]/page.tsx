import Events from "@/components/Events";
import HomeIntro from "@/components/HomeIntro";
import MapSection from "@/components/MapSection";
import SliderNews from "@/components/SliderNews";
import Themes from "@/components/Themes";
import ThreeThemesArticle from "@/components/ThreeThemesArticle";
import { Theme } from "@/lib/interface_theme";
import { client } from "@/lib/sanity";
import AboutProject from "../../components/AboutProject";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import { Interface_new } from "@/lib/interface_new";

const page = async () => {
  const query = `*[_type=='themes']`;
  const data = (await client.fetch(query)) as Theme[];

  const query2 = `*[_type=='news']`;
  const data2 = (await client.fetch(query2)) as Interface_new[];

  return (
    <>
      <HomeIntro />
      <main className="bg-white">
        <div className="padding_content">
          <MapSection />
          <Themes />
          <ThreeThemesArticle themes={data} />

          <SliderNews news={data2} />
        </div>
        <Events />
        <div className="padding_content">
          <AboutProject />
          <Partners />
        </div>
      </main>
      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";

export default page;
