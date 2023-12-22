import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás v prípade akejkoľvek otázky.",
  openGraph: {
    title: "Kontakt",
    description:
    "Kontaktujte nás v prípade akejkoľvek otázky.",
    images: [
      {
        url: "/home_banner1.jpg",
        alt: "Kontakt",
      },
    ],
  },
};


const Page = () => {
  const p =  useTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  const navbar_array = [home, about_project, monuments, experience, masaryk, contact];


  const t =  useTranslations("contact");
  const name_lastname = t("name_lastname");
  const message = t("message");
  const send = t("send");

  const contact_array = [name_lastname,message, send];

  return (
    <>
      <div className="padding_content gdpr intro_padding">
      <NavbarSecond navbar_array={navbar_array} black={true} />
        <h2 className="gdpr_title">{t("title")}</h2>
        <ContactForm contact_array={contact_array}/>

      </div>
      <Footer />
    </>
  );
};

export default Page;
