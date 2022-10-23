import { createSlice } from "@reduxjs/toolkit";
// json datas
import TodoListTasks from "../utils/jsonData/TodoListTasks";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    allTodos: TodoListTasks || null,
    changeId: null,
    changeText: null,
  },
  reducers: {
    setDeleteCart: (state, action) => {
      let newArr = [];
      state.allTodos.map((val) => {
        if (val.id !== action.payload) {
          newArr.push(val);
        }
      });
      state.allTodos = newArr;
    },
    setChangeText: (state, action) => {
      state.changeText = action.payload;
      state.allTodos.map((value) => {
        if (value.id == state.changeId) {
          value.subject = state.changeText;
        }
      });
    },
    setChangeId: (state, action) => {
      state.changeId = action.payload;
    },
    setCheckedBtnControl: (state, action) => {
      state.allTodos.map((value) => {
        if (value.id == action.payload[0]) {
          value.isCompleted = true;
        }
      });
    },
    setCheckedBtnControlSecond: (state, action) => {
      state.allTodos.map((value) => {
        if (value.id == action.payload) {
          value.isCompleted = false;
        }
      });
    },
  },
});

export const getAllTodosData = (state) => state.todo.allTodos;
export const getChangeTextId = (state) => state.todo.changeTextId;
export const {
  setDeleteCart,
  setChangeText,
  setChangeId,
  setCheckedBtnControl,
  setCheckedBtnControlSecond,
} = TodoSlice.actions;
export default TodoSlice.reducer;
