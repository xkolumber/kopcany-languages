import Image from "next/image";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";

import EventPortableText from "@/components/EventPortableText";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import Partners from "@/components/Partners";
import { My_event } from "@/lib/interface_event";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import GroupPictures from "@/components/GroupPictures";
import { Metadata } from "next";

const dynamicTitle = async (slug: string) => {
  const query = `*[_type == "events" && slug.current == "${slug}"][0].nazov_podujatia['sk']`;
  const data = await client.fetch(query);
  return data;
};

const dynamicImageUrl = async (slug: string) => {
  const query = `*[_type == "events" && slug.current ==  "${slug}"][0]`;
  const data = await client.fetch(query);
  const src = urlFor(data.titulna_foto).url();
  return src;
};
const dynamicDescription = async (slug: string) => {
  const query = `*[_type == "events" && slug.current ==  "${slug}"].text_podujatie[0].content[0].children[0].text`;
  const data = await client.fetch(query);
  const stringData = String(data);
  return stringData.substring(0, Math.min(stringData.length, 80));
};

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await dynamicTitle(params.slug);
  const imageUrl = await dynamicImageUrl(params.slug);
  const dynamicText = await dynamicDescription(params.slug);

  return {
    title: title,
    description: dynamicText,
    openGraph: {
      title: title,
      description: dynamicText,
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
    },
  };
};

async function getPhotos(slug: string, skupina_obrazkov: string) {
  const query = `*[_type == "events" && slug.current == "${slug}"]{
  ${skupina_obrazkov}[]{
         asset->{
      _id,
      url
    }
     }
}`;
  const data = await client.fetch(query);
  return data;
}

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const t = await getTranslations("event");
  const data = (await getData(params.slug)) as My_event;
  const data2 = await getPhotos(params.slug, "skupina_obrazkov");

  const currentDate = new Date().toISOString().split("T")[0];

  const locale = useLocale();

  const p = await getTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  const navbar_array = [
    home,
    about_project,
    monuments,
    experience,
    masaryk,
    contact,
  ];

  return (
    <>
      <div className="titulna_foto padding_content intro_padding">
        <NavbarSecond navbar_array={navbar_array} />
        <Image
          src={urlFor(data.titulna_foto).url()}
          alt=""
          width={1920}
          height={1080}
          className="bg_image_wrapper"
          priority
        />
      </div>
      <div className="padding_content bg-white">
        {data.nazov_podujatia[locale as keyof typeof data.nazov_podujatia] && (
          <h1 className="text-black">
            {data.nazov_podujatia[locale as keyof typeof data.nazov_podujatia]}
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
                  <h4> {t("where")}</h4>
                  <p> {data.kde[locale as keyof typeof data.kde]}</p>
                </span>
                <span>
                  <h4> {t("when")}</h4>

                  <p>
                    {data.kedy}
                    {", "}
                    {data.cas}
                  </p>
                </span>
                <span>
                  <h4> {t("entry")}</h4>
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
              <button className="btn btn--primary">{t("back")}</button>
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
        {data.kedy && currentDate > data.kedy && (
          <GroupPictures data={data2[0]} parameter="skupina_obrazkov" />
        )}
        <Partners />
      </div>

      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";
export default Page;
