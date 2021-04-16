import { useContext } from "react";
import { TodoContext } from "./componants/TodoContext";
import "./style/index.css";
import Home from "./componants/Home";
function App() {
  const { theme } = useContext(TodoContext);
  return (
    <div className={`App ${!theme ? "dark" : null}`}>
      <div className="holder">
        <Home />
      </div>
    </div>
  );
}

export default App;
