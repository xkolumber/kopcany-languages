import AboutProject from "@/components/AboutProject";
import ArchiveSection from "@/components/ArchiveSection";
import Events from "@/components/Events";
import HomeIntro from "@/components/HomeIntro";
import MapSection from "@/components/MapSection";
import Partners from "@/components/Partners";
import Themes from "@/components/Themes";
import ThreeThemesArticle from "@/components/ThreeThemesArticle";

export default function Home() {
  return (
    <>
      <div className="">
        <HomeIntro />

        <main className="bg-white">
          <div className="padding_content">
            <MapSection />
            <Themes />
            <ThreeThemesArticle />
          </div>
          <Events />
          <div className="padding_content">
            <AboutProject />
          </div>

          <ArchiveSection />
          <div className="padding_content !pt-0">
            <Partners />
          </div>
        </main>
      </div>
    </>
  );
}
