import React from "react";
import style from "./style.module.css";
// components
import TodoCard from "../../components/todoList/todoCard";
import WheatherForecast from "../../components/wheatherForecast";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <TodoCard />
      <WheatherForecast />
    </div>
  );
};

export default MainPage;
