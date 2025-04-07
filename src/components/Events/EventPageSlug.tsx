"use client";
import Image from "next/image";

import { urlFor } from "@/lib/sanityImageUrl";

import useLanguageStore from "@/app/cookieStore/store";
import EventPortableText from "@/components/Events/EventPortableText";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { getEventData, getEventDataPhotos } from "@/lib/functions_server";
import { My_event } from "@/lib/interface_event";
import { translations } from "@/lib/languages";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import AboutProjectLoading from "../AboutUs/AboutProjectLoading";

interface Props {
  slug: string;
}

const EventPageSlug = ({ slug }: Props) => {
  const { data, error, isLoading } = useQuery<My_event>({
    queryKey: ["event", slug],
    queryFn: () => getEventData(slug),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery<any>({
    queryKey: ["event_photos", slug],
    queryFn: () => getEventDataPhotos(slug, "skupina_obrazkov"),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const currentDate = new Date().toISOString().split("T")[0];

  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      {isLoading && <AboutProjectLoading />}
      {data && (
        <>
          <div className="titulna_foto padding_content intro_padding">
            <NavbarSecond />
            <Image
              src={urlFor(data.titulna_foto).url()}
              alt=""
              width={1920}
              height={1080}
              quality={100}
              className="bg_image_wrapper"
              priority
            />
          </div>
          <div className="padding_content bg-white">
            {data.nazov_podujatia[
              language as keyof typeof data.nazov_podujatia
            ] && (
              <h1 className="text-black">
                {
                  data.nazov_podujatia[
                    language as keyof typeof data.nazov_podujatia
                  ]
                }
              </h1>
            )}

            <div className="event_page">
              {data && (
                <div className="max-width-50">
                  <EventPortableText data={data} specify="text_podujatie" />
                </div>
              )}

              {data.kedy && currentDate <= data.kedy && (
                <>
                  <div className="event_data text-black">
                    <span>
                      <h4> {t.event.where}</h4>
                      <p> {data.kde[language as keyof typeof data.kde]}</p>
                    </span>
                    <span>
                      <h4> {t.event.when}</h4>

                      <p>
                        {data.kedy}
                        {", "}
                        {data.cas}
                      </p>
                    </span>
                    <span>
                      <h4> {t.event.entry}</h4>
                      <p>
                        {data.vstup_bezna_cena} {"€ "}
                        <br></br>
                        {"VIP "} {data.vstup_vip}
                        {"€ "}
                      </p>
                    </span>
                  </div>
                </>
              )}
            </div>
            {data.kedy && currentDate <= data.kedy && (
              <>
                <Link href="/">
                  {" "}
                  <button className="btn btn--primary">{t.event.back}</button>
                </Link>

                {data.plagat && (
                  <Image
                    src={urlFor(data.plagat).url()}
                    alt="Mapa okolia Záhoria"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                    }}
                    className="event_poster"
                    quality={100}
                  />
                )}
              </>
            )}

            {/* {data2 && data.kedy && currentDate > data.kedy && (
              <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />
            )} */}
            <Partners />
          </div>
        </>
      )}
    </>
  );
};

export default EventPageSlug;
