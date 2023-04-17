
import styles from "./style.module.css"
 const ToDoItem = ( {priority , subject,  onEdit, onDelete }) => {
console.log({priority , subject  });
    return(
        
        <div className={styles["todo-list-item-card"]} onDoubleClick={()=>{console.log("SCDCDS");}}>
     
        <div className={`${styles.priority} ${styles[priority]}`}>
          {priority}
        </div>
        <div className={styles.subject}>{subject}</div>
        <div className={styles.actions}>
        {/* <button className={styles.editButton} onClick={onEdit}> */}
        <button className={styles.editButton}>
          Edit
        </button>
        <button className={styles.deleteButton} >
        {/* <button className={styles.deleteButton} onClick={onDelete}> */}
          Delete
        </button>
      </div>
      </div>
     
    )
}

export default ToDoItem