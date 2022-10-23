import React from "react";
import style from "./style.module.css";
// components
import TodoCard from "../../components/todoList/todoCard";
import WheatherForecast from "../../components/wheatherForecast";
import News from "../../components/news";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <TodoCard />
        <News />
      </div>
      <WheatherForecast />
    </div>
  );
};

export default MainPage;
