import BaroquePage from "@/components/BaroquePage";
import { dynamicImageUrlBaroque } from "@/lib/functions_server";
import { Metadata } from "next";

const generateMetadata = async () => {
  const imageUrl = await dynamicImageUrlBaroque();

  return {
    title: "Zaži barokovú krajinu",
    description:
      "Druhá polovica 18. storočia bola pre územie Kopčian, Holíča a Hodonína mimoriadne významná.",
    openGraph: {
      title: "Zaži barokovú krajinu",
      description:
        "Druhá polovica 18. storočia bola pre územie Kopčian, Holíča a Hodonína mimoriadne významná.",
      images: [
        {
          url: imageUrl,
          alt: "Zaži barokovú krajinu",
        },
      ],
    },
  };
};

export const metadata: Promise<Metadata> = generateMetadata();

const Page = () => {
  return (
    <>
      <BaroquePage />
    </>
  );
};

export default Page;
