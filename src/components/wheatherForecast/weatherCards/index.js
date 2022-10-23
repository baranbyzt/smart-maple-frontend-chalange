import React, { useState } from "react";
import style from "./style.module.css";
// images
import cloudy1 from "../../../assets/images/weather/cloudy.svg";
import rainy1 from "../../../assets/images/weather/rain.svg";
import snowy1 from "../../../assets/images/weather/snow.svg";
import sunny1 from "../../../assets/images/weather/sunny.svg";

const WheatherCards = ({ data }) => {
  const [day, setDay] = useState(null);
  const [day1, setDay1] = useState(null);
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
  let images = [cloudy1, rainy1, snowy1, sunny1];

  let weekControl = (baba) => {
    setDay(week[baba]);
  };

  React.useEffect(() => {
    weekControl(date.getDay());
    switch (data.type) {
      case "sunny":
        setDay1(images[3]);
        break;
      case "rainy":
        setDay1(images[1]);
      case "cloudy":
        setDay1(images[0]);
        break;
      case "snowy":
        setDay1(images[2]);
      default:
      // code block
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <img className="w-24 h-24" src={day1}></img>
      <div className={style.textWrapper}>
        <p>{data.tempeture}</p>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default WheatherCards;
