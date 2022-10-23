import React from "react";
// pages
import MainPage from "./pages/mainPage";
//modals
import TodoEditModal from "./modals/todoEditModal";

let App = () => {
  return (
    <div className="wrapper">
      <>
        <MainPage />
        <TodoEditModal />
      </>
    </div>
  );
};

export default App;
