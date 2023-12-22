import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { useTranslations } from "next-intl";

// export const metadata: Metadata = {
//   title: "Poďakovanie",
//   openGraph: {
//     title: "Naše služby",
//   },
// };

const Page = () => {
    const p =  useTranslations("navbar");

    const home = p("home");
    const about_project = p("about_project");
    const monuments = p("monuments");
    const experience = p("experience");
    const masaryk = p("masaryk");
    const contact = p("contact");
  
    const navbar_array = [home, about_project, monuments, experience, masaryk, contact];


    const t=  useTranslations("thanks");
  
  return (
<>
    <div className="padding_content gdpr intro_padding">
    <NavbarSecond navbar_array={navbar_array} black={true} />
      <div className="thanks_center">
      <h4 className="gdpr_title">{t('message')}</h4>
      </div>
     
    

    </div>
    <Footer />
    </>
    
  );
};

export default Page;