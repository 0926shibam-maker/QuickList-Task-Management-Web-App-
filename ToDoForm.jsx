import { useState } from "react";

export const ToDoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a task"
        style={{ color: "black" }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
