import React from "react";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  setDeleteCart,
  setChangeId,
  setCheckedBtnControl,
  setCheckedBtnControlSecond,
} from "../../../store/TodoSlice";
import trashImage from "../../../assets/images/trash.svg";
import editImage from "../../../assets/images/edit.svg";
const rootElement = document.getElementById("todo-edit-modal-root");

const CardItem = ({ value }) => {
  const [checked, setChecked] = React.useState(value.isCompleted);
  let dispatch = useDispatch();
  React.useEffect(() => {
    checked !== false
      ? dispatch(setCheckedBtnControl([value.id]))
      : console.log("");
    rootElement.style.visibility = "hidden";
  }, [checked]);

  let trashFunction = () => {
    dispatch(setDeleteCart(value.id));
    rootElement.style.visibility = "hidden";
  };

  let openEditModal = () => {
    dispatch(setChangeId([value.id]));
    rootElement.style.visibility = "visible";
  };

  let checkboxControl = () => {
    setChecked(!checked);
    dispatch(setCheckedBtnControlSecond([value.id]));
  };
  return (
    <div className={style.wrapper}>
      <p>{value.subject}</p>
      <span>
        <img
          onClick={openEditModal}
          className={style.editTestImage}
          src={editImage}
        />
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={checkboxControl}
        />
      </span>
      <img
        onClick={trashFunction}
        className={style.trashImage}
        src={trashImage}
      />
    </div>
  );
};

export default CardItem;
