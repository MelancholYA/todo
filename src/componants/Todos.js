import { useState, useContext, useEffect, useRef } from "react";
import { TodoContext } from "./TodoContext";
import Todo from "./Todo";
const Todos = () => {
  const { todos, deleteTodos } = useContext(TodoContext);
  const container = useRef();
  const [toShow, setToShow] = useState();
  const [nav, setNav] = useState(0);
  const updateShow = (id) => {
    if (id === 0) {
      return setToShow(todos.filter((todo) => todo.done));
    }
    if (id === 1) {
      return setToShow(todos.filter((todo) => !todo.done));
    }
    setToShow();
  };
  useEffect(() => {
    container.current.scrollTo({
      top: container.current.offsetHeight,
      behavior: "smooth",
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <ul className="container__todos" ref={container}>
        {todos.length === 0 && (
          <li className="empty">
            <h1>No tasks to do </h1>
          </li>
        )}
        {toShow
          ? toShow.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                done={todo.done}
              />
            ))
          : todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                name={todo.name}
                done={todo.done}
              />
            ))}
      </ul>
      <div className="container__details">
        <span className="container__details__count">
          {todos.filter((todo) => !todo.done).length} items left
        </span>
        <div className="container__details__categories">
          <span
            onClick={() => {
              updateShow();
              setNav(0);
            }}
            className={nav === 0 ? "active" : null}
          >
            all
          </span>
          <span
            onClick={() => {
              updateShow(1);
              setNav(1);
            }}
            className={nav === 1 ? "active" : null}
          >
            active
          </span>
          <span
            onClick={() => {
              updateShow(0);
              setNav(2);
            }}
            className={nav === 2 ? "active" : null}
          >
            complited
          </span>
        </div>
        <span
          className="container__details__count"
          onClick={() => deleteTodos()}
        >
          {" "}
          clear compleated
        </span>
      </div>
    </div>
  );
};

export default Todos;
