import { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const addTodo = () => {
    if (text.length < 1) {
      alert("Enter valid Todo...❌❌❌");
    } else {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };
  const removeAll = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <h1>My Todolist</h1>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        placeholder="enter item"
      />
      <button onClick={addTodo}>Add todo</button>
      <button onClick={removeAll}>Remove all</button>
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
