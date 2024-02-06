import { useDispatch } from "react-redux";
import { changeToDoAction, deleteToDo } from "../store/reducers/todoReducer";
import { useState } from "react";
function TodoListItem({ item }) {
  const [changeTitleOpen, setChangeTitleOpen] = useState(0);
  const [changedText, setChangedText] = useState("");
  const dispatch = useDispatch();
  const removeToDo = (payload) => {
    dispatch(deleteToDo(payload));
  };
  const changeToDo = () => {
    if (!changedText) {
      console.log("Write a text!");
    } else {
      const obj = { id: item.id, title: changedText };
      dispatch(changeToDoAction(obj));
      setChangedText("");
    }
  };

  return (
    <>
      <div className="todo-item" key={item.id}>
        <p>{item.title}</p>
        <div className="options">
          <button>
            <img
              src="./pencil.svg"
              title="change"
              onClick={() => setChangeTitleOpen(!changeTitleOpen)}
            />
          </button>
          <button>
            <img
              src="./trash.png"
              title="delete"
              onClick={() => removeToDo(item)}
            />
          </button>
        </div>
      </div>
      {changeTitleOpen ? (
        <div className="item-change">
          <input
            type="text"
            onChange={(e) => setChangedText(e.target.value)}
            placeholder="Enter text"
            value={changedText}
          />
          <button onClick={() => changeToDo()}>Change</button>
        </div>
      ) : null}
    </>
  );
}
export default TodoListItem;
