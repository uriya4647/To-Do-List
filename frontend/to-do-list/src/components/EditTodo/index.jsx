import styles from "./style.module.css";
import { useState } from "react";
import { validtionTodos } from "../../utils/functions/validtionsTodo";
import { updateTodos } from "../../utils/queris/queris";

const EditTodo = ({
  id,
  description,
  priority,
  isdone,
  getTodos,
  setOpenEditTodo,
}) => {
  const [todo, setTodo] = useState({
    description: description ?? "",
    priority: priority ?? "low",
    isdone: isdone ?? false,
  });
  console.log(priority);
  const handleChange = (prop) => (event) => {
    setTodo({ ...todo, [prop]: event.target.value });
  };

  const handleIsDoneChange = (isDone) => {
    setTodo({ ...todo, isdone: isDone });
  };

  const handleSave = () => {
    if (validtionTodos(todo)) {
      updateTodos(todo, id).then((post) => {
        getTodos();
        setOpenEditTodo(false);
      });
      // .catch((err)=>   alert(`erorr: ${err}`));
    } else {
      alert("filds invalid");
    }
  };

  const handleCancel = () => {
    setOpenEditTodo(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles["todo-list-item-card"]}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={todo.description}
            onChange={handleChange("description")}
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={todo.priority}
            onChange={handleChange("priority")}
            className="select-field"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={todo.isdone}
              onChange={() => handleIsDoneChange(!todo.isdone)}
            />
            <span>Is Done?</span>
          </label>
        </div>
        <div className={styles.actions}>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button className={styles.cancelButton} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
