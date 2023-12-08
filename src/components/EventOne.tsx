import React from "react";

import Link from "next/link";
import Image from "next/image";
import { My_event } from "@/lib/interface_event";
import { urlFor } from "@/lib/sanityImageUrl";

interface Props {
  event: My_event;
}
const EventOne = ({ event }: Props) => {
  return (
    <div className={`event`}>
      <Link href={`/event/${event.slug.current}`}>
        <Image
          src={urlFor(event.titulna_foto).url()}
          alt="Titulna foto"
          width={300}
          height={300}
          className="theme_img"
        />

        <div className="themes_padding">
          <h4 className="text_limit_h4 text-black">{event.nazov_podujatia}</h4>

          <p className="text-black">{event.text_podujatie}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventOne;