import EventPageSlug from "@/components/Events/EventPageSlug";
import {
  getEventDescription,
  getEventImageUrl,
  getEventTitle,
} from "@/lib/functions_server";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await getEventTitle(params.slug);
  const imageUrl = await getEventImageUrl(params.slug);
  const dynamicText = await getEventDescription(params.slug);

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
      <EventPageSlug slug={params.slug} />
    </>
  );
};

export default Page;
