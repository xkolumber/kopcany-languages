"use client";
import React from "react";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";

const SliderNews = () => {
  return (
    <>
      <div className="slider_news_all ">
        <h3 className="max-80vw">Premietanie filmu Veľká Morava a Slovania</h3>
        <p className="max-600px">
          but also the leap into electronic typesetting, but also the leap into
          electronic typesetting, remaining essentially unchanged. remaining
          essentially unchanged.but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="btn btn--primary">Prečítať viac</button>
        <div className="flex flex-row gap-5 py-5">
          <ArrowLeft />
          <ArrowRight />
        </div>
      </div>
    </>
  );
};

export default SliderNews;
