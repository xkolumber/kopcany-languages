import useLanguageStore from "@/app/cookieStore/store";
import { My_event } from "@/lib/interface_event";
import { urlFor } from "@/lib/sanityImageUrl";
import Image from "next/image";
import Link from "next/link";
import EventPortableText from "./EventPortableText";

interface Props {
  event: My_event;
}
const EventOne = ({ event }: Props) => {
  const { language } = useLanguageStore();

  return (
    <div className={`event`}>
      <Link href={`/event/${event.slug.current}`}>
        <Image
          src={urlFor(event.titulna_foto).url()}
          alt="Titulna foto"
          width={300}
          height={300}
          className="themee_img"
        />

        <div className="themes_padding">
          <h5 className="text_limit_h4 text-black">
            {
              event.nazov_podujatia[
                language as keyof typeof event.text_podujatie
              ]
            }
          </h5>

          <p className="text-black">
            <EventPortableText
              data={event}
              specify="text_podujatie"
              view={true}
            />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventOne;
