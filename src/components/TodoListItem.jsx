import { useDispatch } from "react-redux";
import { deleteToDo } from "../store/reducers/todoReducer";
function TodoListItem({ item }) {
  const dispatch = useDispatch();
  const removeToDo = (payload) => {
    dispatch(deleteToDo(payload));
  };

  return (
    <div className="todo-item" key={item.id}>
      <p>{item.title}</p>
      <div className="options">
        <button>
          <img src="./pencil.svg" title="change" />
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
  );
}
export default TodoListItem;
