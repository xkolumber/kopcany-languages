"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { My_event } from "@/lib/interface_event";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";

interface Props {
  data: My_event;
  specify: string;
  view?: boolean;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const EventPortableText = ({ data, specify, view }: Props) => {
  const { language } = useLanguageStore();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof My_event];

  useEffect(() => {
    if (Array.isArray(specifiedData)) {
      const foundActivity = specifiedData.find(
        (activity) => activity.language === language
      );
      const content = foundActivity?.content || [];
      {
        view && setNoveData(content.slice(0, 1));
      }
      {
        !view && setNoveData(content);
      }
    }
  }, [data, language, specify]);

  return <PortableText value={noveData} />;
};

export default EventPortableText;
