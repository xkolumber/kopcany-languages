import AboutProjectPage from "@/components/AboutUs/AboutProjectPage";
import {
  dynamicDescriptionAboutProject,
  dynamicImageUrlAboutProject,
} from "@/lib/functions_server";
import { Metadata } from "next";

const generateMetadata = async () => {
  const imageUrl = await dynamicImageUrlAboutProject();
  const descriptionText = await dynamicDescriptionAboutProject();

  return {
    title: "O projekte",
    description: descriptionText,
    openGraph: {
      title: "O projekte",
      description: descriptionText,
      images: [
        {
          url: imageUrl,
          alt: "O projekte",
        },
      ],
    },
  };
};

export const metadata: Promise<Metadata> = generateMetadata();

const page = () => {
  return (
    <>
      <AboutProjectPage />
    </>
  );
};

export default page;
