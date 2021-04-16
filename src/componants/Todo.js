import { useContext } from "react";
import { TodoContext } from "./TodoContext";
const Todo = ({ done, id, name }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext);
  return (
    <li key={id} className="container__todos__todo">
      <input
        type="checkbox"
        className="check"
        checked={done}
        id={`checkum${id}`}
        onChange={() => updateTodo(id)}
      />
      <label htmlFor={`checkum${id}`}></label>
      <p className={`container__todos__todo__details ${done && "done"}`}>
        {name}
      </p>
      <button className="delete" onClick={() => deleteTodo(id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </li>
  );
};

export default Todo;
