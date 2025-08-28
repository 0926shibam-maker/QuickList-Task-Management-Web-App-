import { useState, useEffect } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [task, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (value) => {
    const newUpdateTask = task.filter((curTask) => curTask !== value);
    setTasks(newUpdateTask);
  };

  const handleClearTodoData = () => {
    setTasks([]);
  };

  const handleMarkDone = (value) => {
    if (window.confirm("Are you sure you want to mark this task as done?")) {
      setTasks((prev) =>
        prev.map((t) => (t === value ? `${t} ✅` : t))
      );
    }
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <section id="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              placeholder="Enter a task"
              value={inputValue}
              onChange={(event) => handleInputChange(event.target.value)}
            />
          </div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      </section>

      <section className="myUnOderList">
        <ul className="todo-list">
          {task.map((curTask, index) => (
            <li className="todo-item" key={index}>
              <span>{curTask}</span>
              <div className="todo-actions">
                <button
                  className="check-btn"
                  onClick={() => handleMarkDone(curTask)}
                >
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </div>
    </section>
  );
};
