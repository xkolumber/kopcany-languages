import React from "react";

import EventOne from "./EventOne";
import { client } from "@/lib/sanity";
import { My_event } from "@/lib/interface_event";

const ArchiveSection = async () => {
  return (
    <div className="events">
      <div className="padding_content">
        <h2 className="text-black">Archív predošlých podujatí</h2>
        <p className="text-black">
          Prezrite si naše spoločné akcie a neváhajte sa zúčastniť
          nasledujúcich! :)
        </p>
        <div className="btn btn--primary">Pozrieť archív</div>
        <div className="three_themes"></div>
      </div>
    </div>
  );
};

export default ArchiveSection;
