"use client";

import Image from "next/image";

import useLanguageStore from "@/app/cookieStore/store";
import EventOne from "@/components/Events/EventOne";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { getActualEvents, getPreviousEvents } from "@/lib/functions_server";
import { My_event } from "@/lib/interface_event";
import { translations } from "@/lib/languages";
import { useQuery } from "@tanstack/react-query";

const EventsPageComponent = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const { language } = useLanguageStore();
  const t = translations[language];

  const {
    data: events,
    error,
    isLoading,
  } = useQuery<My_event[]>({
    queryKey: ["events"],
    queryFn: () => getActualEvents(currentDate),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const {
    data: events2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<My_event[]>({
    queryKey: ["events_previous"],
    queryFn: () => getPreviousEvents(currentDate),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <Image
          src="/all_events.jpg"
          alt=""
          className="bg_image_wrapper"
          width={1920}
          height={1080}
          priority
          quality={100}
        />
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
            priority
          />
        </div>
        <NavbarSecond />
      </div>

      <div className="padding_content bg-white">
        <h1 className="text-black">{t.home_page.events}</h1>

        <p className="max-width-50">{t.home_page.events_description}</p>

        {events && (
          <div className="three_themes">
            {events.map((event) => (
              <EventOne key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
      <div className="events">
        <div className="padding_content">
          <h2 className="text-black">{t.home_page.archive}</h2>
          <p className="text-black">{t.home_page.archive_text}</p>

          {events2 && (
            <div className="three_themes">
              {events2.map((event) => (
                <EventOne key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="padding_content intro_padding bg-white">
        <Partners />
      </div>
    </>
  );
};

export default EventsPageComponent;
