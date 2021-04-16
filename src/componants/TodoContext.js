import React, { useState, useEffect } from "react";
const TodoContext = React.createContext([{}, () => {}]);
const TodoContextProvider = (props) => {
  const [theme, setTheme] = useState(true);
  const local = localStorage.getItem("todos");
  const [todos, setTodos] = useState([]);
  const initState = () => {
    setTodos(local !== null ? JSON.parse(local) : []);
  };
  useEffect(() => {
    initState();
  }, []);

  const newTodo = (name, done) => {
    const todo = {
      id: todos.length + 1,
      name,
      done: done,
    };
    setTodos([...todos, todo]);
  };
  const changeTheme = () => {
    setTheme(!theme);
  };
  const updateTodo = (id) => {
    let newArr = [...todos];
    newArr.map((todo) => todo.id === id && (todo.done = !todo.done));
    setTodos(newArr);
  };
  const deleteTodo = (id) => {
    let newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };
  const deleteTodos = () => {
    let newArr = todos.filter((todo) => !todo.done);
    setTodos(newArr);
  };
  return (
    <TodoContext.Provider
      value={{
        theme,
        changeTheme,
        todos,
        updateTodo,
        deleteTodo,
        deleteTodos,
        newTodo,
        setTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
