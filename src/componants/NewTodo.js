import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
const NewTodo = () => {
  const { newTodo } = useContext(TodoContext);
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);
  const addTodo = (e) => {
    e.preventDefault();
    if (!name) return alert("please provide a valide task");
    newTodo(name, done);
    setName("");
  };
  return (
    <form className="input" onSubmit={addTodo}>
      <input
        type="checkbox"
        className="check"
        id="check"
        name="check"
        onChange={() => setDone(!done)}
      />
      <label htmlFor="check"></label>
      <input
        type="text"
        name="name"
        placeholder="create a new todo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </form>
  );
};

export default NewTodo;
