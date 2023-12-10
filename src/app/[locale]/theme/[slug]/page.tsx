import Image from "next/image";

import { client } from "@/lib/sanity";
import { Theme } from "@/lib/interface_theme";
import { urlFor } from "@/lib/sanityImageUrl";
import Partners from "@/components/Partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageAsset } from "@/lib/interface_photos";

async function getData(slug: string) {
  const query = `*[_type == "themes" && slug.current =="${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}
async function getPhotos(slug: string, skupina_obrazkov: string) {
  const query = `*[_type == "themes" && slug.current == "${slug}"]{
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
async function getMap(slug: string) {
  const query = `*[_type == "themes" && slug.current == "${slug}"]{
    mapa_oblastt { asset->{
      _id,
      url
  }}
  }`;
  const data = await client.fetch(query);
  return data;
}

async function getPhoto(slug: string, dalsia_foto: string) {
  const query = `*[_type == "themes" && slug.current == "${slug}"]{
    ${dalsia_foto}{ asset->{
      _id,
      url
  }}
  }`;
  const data = await client.fetch(query);
  return data;
}

const page = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Theme;
  const data2 = await getPhotos(params.slug, "skupina_obrazkov");
  const data3 = await getPhotos(params.slug, "skupina_obrazkov2");
  const data4 = await getPhotos(params.slug, "skupina_obrazkov_3");

  const mapp = await getMap(params.slug);

  const data_dalsia_foto = await getPhoto(params.slug, "dalsia_foto");
  const data_dalsia_foto2 = await getPhoto(params.slug, "dalsia_foto2");
  const data_dalsia_foto3 = await getPhoto(params.slug, "dalsia_foto3");

  return (
    <>
      <div className="titulna_foto intro_padding padding_content">
        <div className="bg_image_wrapper">
          <Image
            src={urlFor(data.titulna_foto).url()}
            alt="Mapa okolia Záhoria"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg_image_dark_wrapper">
          <Image
            src="/dark.png"
            alt="Dark section"
            fill={true}
            style={{ objectFit: "cover" }}
            className="bg_image_dark"
          />
        </div>
        <Navbar />
      </div>
      <div className="padding_content bg-white">
        <h1 className="text-black">{data.nazov_temy}</h1>
        <div className="text_picture">
          <p className="text-black ">{data.uvodny_text}</p>

          <Image
            src={urlFor(data.kresleny_obrazok).url()}
            alt="Mapa okolia Záhoria"
            width={300}
            height={200}
            className="theme_product_img"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <Image
          src={urlFor(data.foto_stred_clanku).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="video_intro"
          style={{
            objectFit: "cover",
          }}
        />
        <p className="text-black">{data.pokracovanie_text}</p>

        <Image
          src={urlFor(mapp[0].mapa_oblastt.asset.url as ImageAsset).url()}
          alt="Mapa okolia Záhoria"
          width={1000}
          height={1000}
          className="full_width_image_mapa"
        />

        {data2[0].skupina_obrazkov && (
          <div className="skupina_obrazkov">
            {data2[0].skupina_obrazkov.map((obrazok: ImageAsset) => (
              <Image
                key={obrazok.asset._id}
                src={urlFor(obrazok.asset.url).url()}
                alt="Additional photo"
                width={300}
                height={300}
                quality={100}
                className="theme_img"
              />
            ))}
          </div>
        )}

        {data_dalsia_foto[0].dalsia_foto && (
          <Image
            src={urlFor(data_dalsia_foto[0].dalsia_foto.asset.url).url()}
            alt="Mapa okolia Záhoria"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        {data.komentar_fotka && (
          <p className="text-black">{data.komentar_fotka}</p>
        )}

        {data3[0].skupina_obrazkov2 && (
          <div className="skupina_obrazkov">
            {data3[0].skupina_obrazkov2.map((obrazok: ImageAsset) => (
              <Image
                key={obrazok.asset._id}
                src={urlFor(obrazok.asset.url).url()}
                alt="Additional photo"
                width={300}
                height={300}
                quality={100}
                className="theme_img"
              />
            ))}
          </div>
        )}

        {data_dalsia_foto2[0].dalsia_foto2 && (
          <Image
            src={urlFor(data_dalsia_foto2[0].dalsia_foto2.asset.url).url()}
            alt="Historicka foto"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}

        {data4[0].skupina_obrazkov_3 && (
          <div className="skupina_obrazkov">
            {data4[0].skupina_obrazkov_3.map((obrazok: ImageAsset) => (
              <Image
                key={obrazok.asset._id}
                src={urlFor(obrazok.asset.url).url()}
                alt="Additional photo"
                width={300}
                height={300}
                quality={100}
                className="theme_img"
              />
            ))}
          </div>
        )}

        {data_dalsia_foto3[0].dalsia_foto3 && (
          <Image
            src={urlFor(data_dalsia_foto3[0].dalsia_foto3.asset.url).url()}
            alt="Historicka foto"
            width={1000}
            height={1000}
            className="full_width_image"
            style={{
              objectFit: "cover",
            }}
          />
        )}

        <Partners />
      </div>
      <Footer />
    </>
  );
};

export default page;
