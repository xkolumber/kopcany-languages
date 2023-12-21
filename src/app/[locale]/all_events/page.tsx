import Image from "next/image";

import { client } from "@/lib/sanity";

import EventOne from "@/components/EventOne";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { My_event } from "@/lib/interface_event";
import { getTranslations } from "next-intl/server";

const Page = async () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const query = `*[_type == 'events' && kedy >= $currentDate]`;
  const events = (await client.fetch(query, { currentDate })) as My_event[];

  const query2 = `*[_type == 'events' && kedy < $currentDate]`;
  const events2 = (await client.fetch(query2, { currentDate })) as My_event[];

  const t = await getTranslations("home_page");

  const p =  await getTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  
  const navbar_array = [home, about_project, monuments, experience, masaryk, contact];

  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <img  src="/all_events.jpg" alt=""  className="bg_image_wrapper" />
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <NavbarSecond navbar_array={navbar_array}/>
      </div>

      <div className="padding_content bg-white">
        <h1 className="text-black">{t("events")}</h1>

        <p className="max-width-50">{t("events_description")}</p>
        <div className="three_themes">
          {events.map((event) => (
            <EventOne key={event._id} event={event} />
          ))}
        </div>
      </div>
      <div className="events">
        <div className="padding_content">
          <h2 className="text-black">{t("archive")}</h2>
          <p className="text-black">{t("archive_text")}</p>
          <div className="three_themes">
            {events2.map((event) => (
              <EventOne key={event._id} event={event} />
            ))}
          </div>
        </div>
      </div>
      <div className="padding_content intro_padding bg-white">
        <Partners />
      </div>

      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";
export default Page;
