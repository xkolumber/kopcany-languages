import EventsPageComponent from "@/components/Events/EventsPageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udalosti",
  description:
    "Prezrite si naše spoločné akcie a neváhajte sa zúčastniť nasledujúcich",
  openGraph: {
    title: "Udalosti",
    description:
      "Prezrite si naše spoločné akcie a neváhajte sa zúčastniť nasledujúcich",
    images: [
      {
        url: "/home_banner1.jpg",
        alt: "Udalosti",
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <EventsPageComponent />
    </>
  );
};

export default Page;
