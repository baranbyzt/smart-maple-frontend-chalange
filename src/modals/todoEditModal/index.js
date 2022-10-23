import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.css";
import { setChangeText } from "../../store/TodoSlice";
import { useDispatch } from "react-redux";
const rootElement = document.getElementById("todo-edit-modal-root");

const TodoEditModal = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChangeSend = () => {
    dispatch(setChangeText([inputValue]));
    rootElement.style.visibility = "hidden";
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  let closeBtn = () => {
    rootElement.style.visibility = "hidden";
  };

  ReactDOM.render(
    <div className={style.wrapper}>
      <p onClick={closeBtn}>x</p>
      <input type="text" onChange={handleChange} value={inputValue} />
      <div onClick={handleChangeSend}>konsola yaz</div>
    </div>,
    rootElement
  );
};

export default TodoEditModal;
