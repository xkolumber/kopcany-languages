"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { translations } from "@/lib/languages";
import React from "react";

const ThankElement = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  return <h4 className="gdpr_title">{t.thanks.message}</h4>;
};

export default ThankElement;
