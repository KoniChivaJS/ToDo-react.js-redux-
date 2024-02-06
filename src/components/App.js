import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../store/reducers/todoReducer";
import "../components/App.scss";
import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
