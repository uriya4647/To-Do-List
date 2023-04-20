import styles from "./style.module.css";
import PropTypes from "prop-types";
import EditTodo from "../EditTodo";
import { useState } from "react";

const ToDoItem = ({
  id,
  description,
  priority,
  isdone,
  onToggleChange,
  onDelete,
  getTodos,
}) => {
  const [openEditTodo, setOpenEditTodo] = useState(false);

  const handleChangeCheckBox = (isDone) => {
    onToggleChange(id, isDone);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles["todo-list-item-card"]}
        onDoubleClick={() => setOpenEditTodo(true)}
      >
        <div className={`${styles.priority} ${styles[priority]}`}>
          {priority}
        </div>
        <div className={styles.description}>
          {isdone ? <del>{description}</del> : description}
        </div>
        <div className={styles.actions}>
          <label>
            <span>finish</span>
            <input
              type="checkbox"
              checked={isdone}
              onChange={() => handleChangeCheckBox(!isdone)}
              className={styles.doneCheckbox}
            />
          </label>

          <button className={styles.deleteButton} onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      {openEditTodo && (
        <EditTodo
          id={id}
          description={description}
          priority={priority}
          isdone={isdone}
          setOpenEditTodo={setOpenEditTodo}
          getTodos={getTodos}
        />
      )}
    </div>
  );
};

export default ToDoItem;

ToDoItem.prototype = {
  id: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  isdone: PropTypes.bool,
  getTodos: PropTypes.func,
  onToggleChange: PropTypes.func,
  onDelete: PropTypes.func,
};
