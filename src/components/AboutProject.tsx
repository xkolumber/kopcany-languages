"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { About_project } from "@/lib/interface_about_project";
import { urlFor } from "@/lib/sanityImageUrl";
import { getTranslations } from "next-intl/server";
import { client } from "@/lib/sanity";
import { ClipLoader } from "react-spinners";

interface TranslationsHome {
  [key: string]: string;
  cz: string;
  sk: string;
  en: string;
}

interface Props {
  translate_words: string[];
}

const AboutProject = ({ translate_words }: Props) => {
  const [data, setData] = useState<About_project[] | null>(null);
  const [preklad, setPreklad] = useState<TranslationsHome>({
    cz: "",
    sk: "",
    en: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const locale = useLocale();

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/get-home-page-about", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const about2 = await response.json();

        setData(about2);

        if (response.ok) {
          setIsLoading(false);
        } else {
          console.error("failed");
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchAbout();
  }, []);

  useEffect(() => {
    const fetchTranslateText = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/get-home-page-text", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const text = await response.json();

        setPreklad(text);

        if (response.ok) {
          setIsLoading(false);
        } else {
          console.error("failed");
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchTranslateText();
  }, []);

  return (
    <>
      {isLoading && (
        <ClipLoader size={40} color={"#32a8a0"} loading={isLoading} />
      )}
      {data && (
        <>
          <h2 className="text-black">{translate_words[0]}</h2>
          <p className="max-600px text-black">{preklad[locale]}</p>
          <Link href={`/${locale}/about_project`}>
            <div className="btn btn--primary margin-bottom-button">
              {translate_words[1]}
            </div>
          </Link>
          <Link href={`/${locale}/about_project`}>
            <img
              src={urlFor(data[0].titulna_foto).url()}
              alt=""
              className="video_intro"
            />
          </Link>
        </>
      )}
    </>
  );
};

export default AboutProject;
