import React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { getAllTodosData } from "../../../store/TodoSlice";
//components
import CardItem from "../cardItem";

const TodoCard = () => {
  const getAllValue = useSelector(getAllTodosData);
  const [screenSelect, setScreenSelect] = React.useState(false);

  function makeFalse() {
    setScreenSelect(false);
  }

  function makeTrue() {
    setScreenSelect(true);
  }

  return (
    <div className={style.wrapper}>
      <div className={style.switchBtn}>
        <div
          style={{ background: screenSelect !== false ? "white" : "yellow" }}
          onClick={makeFalse}
        >
          <p>All Todos</p>
        </div>
        <div
          style={{ background: screenSelect == false ? "white" : "yellow" }}
          onClick={makeTrue}
        >
          <p>Cheked Todos</p>
        </div>
      </div>
      <hr className={style.hr} />
      <AllCardTodos data={getAllValue} setScreen={screenSelect} />
    </div>
  );
};

export default TodoCard;

let AllCardTodos = ({ data, setScreen }) => {
  console.log(setScreen);
  return (
    <>
      {setScreen === false
        ? data.map((val, index) =>
            val.isCompleted === false ? (
              <CardItem key={index} value={val} />
            ) : null
          )
        : data.map((val, index) =>
            val.isCompleted === true ? (
              <CardItem key={index} value={val} />
            ) : null
          )}
    </>
  );
};
/*

  
      {data.map((val, index) =>
        val.isCompleted === false ? <CardItem key={index} value={val} /> : null
      )}
      <div className="bg-yellow-400">ayırıcı baba</div>
      {data.map((val, index) =>
        val.isCompleted === true ? <CardItem key={index} value={val} /> : null
      )}

*/
