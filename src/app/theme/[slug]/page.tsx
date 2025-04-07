import ThemePageSlug from "@/components/ThemePageSlug";
import {
  themeDescription,
  themeDynamicTitle,
  themeImageUrl,
} from "@/lib/functions_server";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await themeDynamicTitle(params.slug);
  const imageUrl = await themeImageUrl(params.slug);
  const dynamicText = await themeDescription(params.slug);

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

const Page = async ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ThemePageSlug slug={params.slug} />
    </>
  );
};

export default Page;
