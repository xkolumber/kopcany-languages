"use client";

import useLanguageStore from "@/app/cookieStore/store";
import { getActualEvents } from "@/lib/functions_server";
import { My_event } from "@/lib/interface_event";
import { translations } from "@/lib/languages";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import EventOne from "./EventOne";

const Events = () => {
  const { language } = useLanguageStore();

  const t = translations[language];

  const currentDate = new Date().toISOString().split("T")[0];

  const {
    data: events,
    error,
    isLoading,
  } = useQuery<My_event[] | null>({
    queryKey: ["home_page_events"],
    queryFn: () => getActualEvents(currentDate),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    enabled: currentDate != undefined,
  });

  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black"> {t.home_page.events}</h2>
        <p className="text-black">{t.home_page.events_description}</p>
        <div className="three_themes">
          {events &&
            events.map((event) => <EventOne key={event._id} event={event} />)}
        </div>

        {isLoading && (
          <ClipLoader size={40} color={"#000000"} loading={isLoading} />
        )}

        {error && <p>Chyba pri načítaní dát.</p>}
      </div>
    </div>
  );
};

export default Events;
