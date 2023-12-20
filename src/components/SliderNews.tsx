"use client";
import React, { useState } from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { Interface_new } from "@/lib/interface_new";
import { useLocale } from "next-intl";
import Link from "next/link";
interface NewsItem {
  nazov_aktuality: Record<string, string>;
  text_aktualita: Record<string, string>;
  slug: Record<string, string>;
}

interface Props {
  news: NewsItem[];
}

const SliderNews = ({ news }: Props) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const locale = useLocale();

  const currentNews = news[currentNewsIndex];

  const slug = news[currentNewsIndex].slug;

  const handleNext = () => {
    const newIndex = (currentNewsIndex + 1) % news.length;
    setCurrentNewsIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentNewsIndex - 1 + news.length) % news.length;
    setCurrentNewsIndex(newIndex);
  };

  return (
    <>
      <div className="slider_news_all relative">
        <div className="dots">
          {news.map((item, index) => (
            <div
              key={index}
              className={`dot ${
                index === currentNewsIndex ? "active-dot" : ""
              }`}
            ></div>
          ))}
        </div>
        <h3 className="max-80vw">
          {
            currentNews.nazov_aktuality[
              locale as keyof typeof currentNews.nazov_aktuality
            ]
          }
        </h3>
        <p className="max-600px slider_news_max">
          {
            currentNews.text_aktualita[
              locale as keyof typeof currentNews.text_aktualita
            ]
          }
        </p>
        <Link href={`/${locale}/actuality/${slug.current}`}>
          <button className="btn btn--primary">Prečítať viac</button>
        </Link>

        <div className="arrows">
          <span onClick={handlePrevious}>
            <ArrowLeft />
          </span>
          <span onClick={handleNext}>
            <ArrowRight />
          </span>
        </div>
        <img src="/event_draw.png" alt="Event picture" className="event_img" />
      </div>
    </>
  );
};

export default SliderNews;
