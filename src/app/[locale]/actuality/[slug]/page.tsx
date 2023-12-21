import Image from "next/image";

import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";

import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { Interface_new } from "@/lib/interface_new";
import { useLocale, useTranslations } from "next-intl";

async function getData(slug: string) {
  const query = `*[_type == "news" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Interface_new;

  const locale = useLocale();

  const p =  useTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  const navbar_array = [home, about_project, monuments, experience, masaryk, contact];
  return (
    <>
      <div className="padding_content bg-white intro_padding">
        <NavbarSecond  navbar_array={navbar_array}/>
        <h1 className="text-black">
          {data.nazov_aktuality[locale as keyof typeof data.nazov_aktuality]}
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <p className="text-black lg:w-3/6">
            {data.text_aktualita[locale as keyof typeof data.text_aktualita]}
          </p>

          <button className="btn btn--primary">Zakúpiť lístky</button>
        </div>
        <img   src={urlFor(data.titulna_foto).url()} alt="" className="full_width_image_mapa" />
        {/* <Image
          src={urlFor(data.titulna_foto).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
          }}
          className="full_width_image_mapa"
        /> */}
      </div>
      <Footer />
    </>
  );
};

export default Page;
