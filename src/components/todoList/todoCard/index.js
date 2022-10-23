import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { getAllTodosData } from "../../../store/TodoSlice";
import AllCardTodos from "./AllCardTodos";

const TodoCard = () => {
  const getAllValue = useSelector(getAllTodosData);
  const [screenSelect, setScreenSelect] = React.useState(false);

  function screenControlFalse() {
    setScreenSelect(false);
  }

  function screenControlTrue() {
    setScreenSelect(true);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.switchBtn}>
        <button
          style={{ background: screenSelect !== false ? "white" : "yellow" }}
          onClick={screenControlFalse}
        >
          All Todos
        </button>

        <button
          style={{ background: screenSelect == false ? "white" : "yellow" }}
          onClick={screenControlTrue}
        >
          Cheked Todos
        </button>
      </div>
      <hr />
      <AllCardTodos data={getAllValue} setScreen={screenSelect} />
    </div>
  );
};

export default TodoCard;
