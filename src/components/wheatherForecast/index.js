import React from "react";
import style from "./style.module.css";
import WheatherCards from "./weatherCards";
import WheatherData from "../../utils/jsonData/WheatherData";

const WheatherForecast = () => {
  return (
    <div className={style.wrapper}>
      {WheatherData.map((val, index) => (
        <WheatherCards key={index} data={val} />
      ))}
    </div>
  );
};

export default WheatherForecast;
