import React from "react";
import Todo from "./Todo";
import "./Todolist.css";
const Todolist = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          id={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default Todolist;
