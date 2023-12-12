import Image from "next/image";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";

import { My_event } from "@/lib/interface_event";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import { useLocale } from "next-intl";

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
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
        />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">
          {data.nazov_podujatia[locale as keyof typeof data.nazov_podujatia]}
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="text-black lg:w-3/6">
            {data.text_podujatie[locale as keyof typeof data.text_podujatie]}
          </p>
          <div className="event_data text-black">
            <span>
              {locale === "sk" && <h4>KDE</h4>}
              {locale === "cz" && <h4>KDE</h4>}
              {locale === "en" && <h4>WHERE</h4>}
              <p> {data.kde[locale as keyof typeof data.kde]}</p>
            </span>
            <span>
              {locale === "sk" && <h4>KEDY</h4>}
              {locale === "cz" && <h4>KDY</h4>}
              {locale === "en" && <h4>WHEN</h4>} <p>{data.kedy}</p>
            </span>
            <span>
              {locale === "sk" && <h4>VSTUP</h4>}
              {locale === "cz" && <h4>VSTUP</h4>}
              {locale === "en" && <h4>ENTRY</h4>}
              <p>
                {data.vstup_bezna_cena} {data.vstup_vip}
              </p>
            </span>
            <button className="btn btn--primary">Zakúpiť lístky</button>
          </div>
        </div>
      </div>
      <Events />
      <Footer />
    </>
  );
};

export default Page;
