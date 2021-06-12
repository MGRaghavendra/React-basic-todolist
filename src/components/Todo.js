import React from "react";
import "./Todo.css";
function Todo({ text, id, todos, setTodos }) {
  const removeTodo = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo">
      <p>{text}</p>
      <button onClick={removeTodo}>remove</button>
    </div>
  );
}

export default Todo;
