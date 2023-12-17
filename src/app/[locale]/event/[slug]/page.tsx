import Image from "next/image";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";

import EventPortableText from "@/components/EventPortableText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import { My_event } from "@/lib/interface_event";
import { useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const t = await getTranslations("event");
  const data = (await getData(params.slug)) as My_event;

  const locale = useLocale();
  return (
    <>
      <div className="titulna_foto padding_content intro_padding">
        <Navbar />
        <Image
          src={urlFor(data.titulna_foto).url()}
          alt="Mapa okolia Záhoria"
          fill={true}
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_podujatia[locale as keyof typeof data.nazov_podujatia]}
        </h1>
        <div className="event_page">
          <p className="max-width-50">
            <EventPortableText data={data} specify="text_podujatie" />
          </p>
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
        </div>
        <button className="btn btn--primary">
          <Link href="/">{t("back")}</Link>{" "}
        </button>
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
        />
        <Partners />
      </div>

      <Footer />
    </>
  );
};

export const dynamic = "force-dynamic";
export default Page;
