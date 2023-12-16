import React from "react";

import EventOne from "./EventOne";
import { client } from "@/lib/sanity";
import { My_event } from "@/lib/interface_event";

const Events = async () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const query2 = `*[_type == 'events' && kedy >= $currentDate]`;
  const events = (await client.fetch(query2, { currentDate })) as My_event[];
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">Podujatia</h2>
        <p className="text-black">
          V blízkej budúcnosti nás čakajú tieto podujatia:
        </p>
        <div className="three_themes">
          {events.map((event) => (
            <EventOne key={event._id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
