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
      <NavbarSecond navbar_array={navbar_array}/>
        <h2 className="gdpr_title">Kontakt</h2>

        <p>
          {" "}
          Všeobecné nariadenie o ochrane osobných údajov (General Data
          Protection Regulation čiže GDPR), účinné od 25. 5. 2018 má za cieľ
          chrániť práva (predovšetkým) občanov Európskej únie proti
          neoprávnenému nakladaniu s ich osobnými údajmi.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Page;
