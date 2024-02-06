import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
function TodoList() {
  const data = useSelector((state) => state.list);

  return (
    <div className="todo-list">
      {data.map((item) => (
        <TodoListItem item={item} />
      ))}
    </div>
  );
}
export default TodoList;
