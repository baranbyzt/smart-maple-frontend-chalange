import React, { Component } from "react";
import style from "./style.module.css";
import NewsItem from "./NewsItem";
import { SampleNextArrow, SamplePrevArrow } from "./CustomSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsJsonData from "../../utils/jsonData/News";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={style.general_wrapper}>
      <div className={style.wrapper}>
        <Slider {...settings}>
          {newsJsonData.map((element, index) => (
            <div key={index}>
              <NewsItem data={element} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default News;
