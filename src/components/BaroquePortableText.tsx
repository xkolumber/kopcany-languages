"use client";
import useLanguageStore from "@/app/cookieStore/store";
import { Baroque } from "@/lib/interface_baroque";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
interface Props {
  data: Baroque;
  specify: string;
  view?: true;
}

interface Block {
  _type: string;
  children: { text: string }[];
}

const BaroquePortableText = ({ data, specify, view }: Props) => {
  const { language } = useLanguageStore();
  const [noveData, setNoveData] = useState<Block[]>([]);

  const specifiedData = data[specify as keyof Baroque];

  useEffect(() => {
    if (Array.isArray(specifiedData)) {
      const foundActivity = specifiedData.find(
        (activity) => activity.language === language
      );
      const content = foundActivity?.content || [];
      {
        view && setNoveData([content[0]]);
      }
      {
        !view && setNoveData(content);
      }
    }
  }, [data, language, specify]);

  return <PortableText value={noveData} />;
};

export default BaroquePortableText;
