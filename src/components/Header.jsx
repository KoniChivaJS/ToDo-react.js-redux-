import { useDispatch } from "react-redux";
import { addToDo } from "../store/reducers/todoReducer";
import { useState } from "react";
function Header() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const sendToDo = () => {
    if (!text) {
      alert("Write a ToDo task");
    } else {
      dispatch(
        addToDo({
          id: Date.now(),
          title: text,
        })
      );
      setText("");
    }
  };
  return (
    <>
      <h1>ToDo List</h1>
      <div className="input-data">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter a Todo"
          value={text}
        ></input>
        <button onClick={sendToDo}>Add ToDo</button>
      </div>
    </>
  );
}

export default Header;
