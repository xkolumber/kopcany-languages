import ContactForm from "@/components/ContactForm";
import NavbarSecond from "@/components/NavbarSecond";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás v prípade akejkoľvek otázky.",
  openGraph: {
    title: "Kontakt",
    description: "Kontaktujte nás v prípade akejkoľvek otázky.",
    images: [
      {
        url: "/home_banner1.jpg",
        alt: "Kontakt",
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true} />

        <ContactForm />
      </div>
    </>
  );
};

export default Page;
