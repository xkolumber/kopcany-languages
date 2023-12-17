"use client";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { About_project } from "@/lib/interface_about_project";
interface Props {
  data: About_project;
  specify: string;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const AboutPortableText = ({ data, specify }: Props) => {
  const locale = useLocale();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof About_project];

  useEffect(() => {
    if (Array.isArray(specifiedData)) {
      const foundActivity = specifiedData.find(
        (activity) => activity.language === locale
      );
      const content = foundActivity?.content || [];
      setNoveData(content);
    }
  }, [data, locale, specify]);

  return <PortableText value={noveData} />;
};

export default AboutPortableText;
