import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
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
      <div className="padding_content gdpr intro_padding">
      <NavbarSecond navbar_array={navbar_array} black={true} />
        <h2 className="gdpr_title">Kontakt</h2>
        <ContactForm />

      </div>
      <Footer />
    </>
  );
};

export default Page;
