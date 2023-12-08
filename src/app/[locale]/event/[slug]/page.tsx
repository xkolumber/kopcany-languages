import Image from "next/image";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";

import { My_event } from "@/lib/interface_event";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";

async function getData(slug: string) {
  const query = `*[_type == "events" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as My_event;
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
        <h1 className="text-black">{data.nazov_podujatia}</h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="text-black lg:w-3/6">{data.text_podujatie}</p>
          <div className="event_data text-black">
            <span>
              <h4>KDE</h4> <p>{data.kde}</p>
            </span>
            <span>
              <h4>KEDY</h4> <p>{data.kedy}</p>
            </span>
            <span>
              <h4>VSTUP</h4>
              <p>
                {data.vstup_bezna_cena} {data.vstup_vip}
              </p>
            </span>
            <button className="btn btn--primary">Zakúpiť lístky</button>
          </div>
        </div>
      </div>
      <Events />
    </>
  );
};

export default Page;
