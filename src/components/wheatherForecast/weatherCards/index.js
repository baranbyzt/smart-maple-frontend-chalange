import React, { useState } from "react";
import style from "./style.module.css";
// images
import cloudyImage from "../../../assets/images/weather/cloudy.svg";
import rainyImage from "../../../assets/images/weather/rain.svg";
import snowyImage from "../../../assets/images/weather/snow.svg";
import sunnyImage from "../../../assets/images/weather/sunny.svg";

const WheatherCards = ({ data }) => {
  const [day, setDay] = useState(null);
  const [weather, setWeather] = useState(null);
  let images = [cloudyImage, rainyImage, snowyImage, sunnyImage];
  const date = new Date(data.date);
  const week = [
    "moonday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  let weekControl = (val) => {
    setDay(week[val]);
  };
  let weatherControl = () => {
    switch (data.type) {
      case "sunny":
        setWeather(images[3]);
        break;
      case "rainy":
        setWeather(images[1]);
      case "cloudy":
        setWeather(images[0]);
        break;
      case "snowy":
        setWeather(images[2]);
    }
  };

  React.useEffect(() => {
    weekControl(date.getDay());
    weatherControl();
  }, []);

  return (
    <div className={style.wrapper}>
      <img src={weather}></img>
      <div className={style.textWrapper}>
        <p>{data.tempeture}</p>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default WheatherCards;
