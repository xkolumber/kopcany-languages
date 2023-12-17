"use client";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { My_event } from "@/lib/interface_event";
interface Props {
  data: My_event;
  specify: string;
  view?: boolean;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const AboutPortableText = ({ data, specify, view }: Props) => {
  const locale = useLocale();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof My_event];

  useEffect(() => {
    if (Array.isArray(specifiedData)) {
      const foundActivity = specifiedData.find(
        (activity) => activity.language === locale
      );
      const content = foundActivity?.content || [];
      {
        view && setNoveData(content.slice(0, 1));
      }
      {
        !view && setNoveData(content);
      }
    }
  }, [data, locale, specify]);

  return <PortableText value={noveData} />;
};

export default AboutPortableText;
