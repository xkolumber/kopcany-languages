"use client";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { About_project } from "@/lib/interface_about_project";
import { Baroque } from "@/lib/interface_baroque";
interface Props {
  data: Baroque;
  specify: string;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const BaroquePortableText = ({ data, specify }: Props) => {
  const locale = useLocale();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof Baroque];

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

export default BaroquePortableText;
