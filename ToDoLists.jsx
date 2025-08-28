import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoLists = ({ data, handleDeleteTodo }) => {
  const handleDoneClick = () => {
    if (window.confirm("Are you sure you have completed this task?")) {
      alert("Task marked as done ✅");
    }
  };

  return (
    <li className="todo-item">
      <span>{data}</span>

      <button className="check-btn" onClick={handleDoneClick}>
        <MdCheck />
      </button>

      <button
        className="delete-btn"
        onClick={() => handleDeleteTodo(data)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
