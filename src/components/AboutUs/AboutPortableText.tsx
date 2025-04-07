"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { About_project } from "@/lib/interface_about_project";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";

interface Props {
  data: any;
  specify: string;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const AboutPortableText = ({ data, specify }: Props) => {
  const { language } = useLanguageStore();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof About_project];

  useEffect(() => {
    if (Array.isArray(specifiedData)) {
      const foundActivity = specifiedData.find(
        (activity) => activity.language === language
      );
      const content = foundActivity?.content || [];
      setNoveData(content);
    }
  }, [data, language, specify]);

  return <PortableText value={noveData} />;
};

export default AboutPortableText;
