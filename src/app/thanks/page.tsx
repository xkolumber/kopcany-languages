"use client";
import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { translations } from "@/lib/languages";
import { Metadata } from "next";
import useLanguageStore from "../cookieStore/store";

export const metadata: Metadata = {
  title: "Poďakovanie",
  description: "Poďakovanie za správu",
  openGraph: {
    title: "Poďakovanie",
    description: "Poďakovanie za správu",
  },
};
const Page = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true} />
        <div className="thanks_center">
          <h4 className="gdpr_title">{t.thanks.message}</h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
