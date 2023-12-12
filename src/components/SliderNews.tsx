"use client";
import React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import { Interface_new } from "@/lib/interface_new";

interface Props {
  news: Interface_new[];
}

const SliderNews = ({ news }: Props) => {
  return (
    <>
      <div className="slider_news_all relative">
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <h3 className="max-80vw">Premietanie filmu Veľká Morava a Slovania</h3>
        <p className="max-600px">
          but also the leap into electronic typesetting, but also the leap into
          electronic typesetting, remaining essentially unchanged. remaining
          essentially unchanged.but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="btn btn--primary">Prečítať viac</button>
        <div className="arrows">
          <ArrowLeft />
          <ArrowRight />
        </div>
        <img src="/event_draw.png" alt="Event picture" className="event_img" />
      </div>
    </>
  );
};

export default SliderNews;
