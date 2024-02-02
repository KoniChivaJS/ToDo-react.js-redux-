import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo } from "../store/reducers/todoReducer";
import "../components/App.scss";
import { useState } from "react";

function App() {
  const data = useSelector((state) => state.list);
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

  const removeToDo = (payload) => {
    dispatch(deleteToDo(payload));
  };

  return (
    <div className="wrapper">
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
      <div className="todo-list">
        {data.map((item) => (
          <div className="todo-item" key={item.id}>
            <p>{item.title}</p>
            <button>
              <img
                src="./trash.png"
                title="delete"
                onClick={() => removeToDo(item)}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
