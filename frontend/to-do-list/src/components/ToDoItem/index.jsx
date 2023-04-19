import { useState } from "react";
import styles from "./style.module.css";

const ToDoItem = ({
  id,
  description,
  priority,
  isdone,
  onToggleChange,
  onEdit,
  onDelete,
  onAdd,
}) => {
  const [isChecked, setIsChecked] = useState(isdone ?? false);

  const handleChangeCheckBox = (isDone) => {
    setIsChecked(isDone);
    onToggleChange(id, isDone);
  };
console.log(isChecked);
  return (
    <div className= {styles.container}>
    <div
      className={styles["todo-list-item-card"]}
      onDoubleClick={() => {
        console.log("SCDCDS");
      }}
    >
      <div className={`${styles.priority} ${styles[priority]}`}>{priority}</div>
      <div className={styles.description}>{isChecked ? <del>{description}</del> : description }</div>
      <div className={styles.actions}>
      <label>
        <span>finish</span>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleChangeCheckBox(!isChecked)}
          className={styles.doneCheckbox}
        />
        </label>
        {/* <button className={styles.editButton} onClick={onEdit}> */}
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>
          {/* <button className={styles.deleteButton} onClick={onDelete}> */}
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};

export default ToDoItem;
