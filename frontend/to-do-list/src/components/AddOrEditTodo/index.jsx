import { useState } from "react";
import styles from "./style.module.css";
import { setNewTodos ,updateTodos } from "../../utils/queris/queris";
import {validtionTodos} from '../../utils/functions/validtionsTodo'
const AddOrEditTodo = ({subject = 'Add' , todo , getTodos }) => {
 
  const [newTodo, setNewTodo] = useState({
    description: todo?.description ?? "",
    priority: todo?.priority ?? "low",
    isdone: todo?.isdone ?? false,
  });

  const handleChange = (prop) => (event) => {
    setNewTodo({ ...newTodo, [prop]: event.target.value });
  };
  
  const handleIsDoneChange = (isDone) => {
    setNewTodo({ ...newTodo, isdone: isDone })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (validtionTodos(newTodo)) {
      const addOrNewFunc = subject === 'Add'
       ? setNewTodos : updateTodos;
   
    addOrNewFunc(newTodo , todo?.id ?? "")
    .then((post) => {
     getTodos();   

      });
      setNewTodo({
        description: "",
        priority: "low",
        isdone: false,
      });
      // .catch((err)=>   alert(`erorr: ${err}`));
    } else {
      alert("filds invalid");
    }
  };



  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
       <h2 className={styles.formTitle}>{`${subject} Todo`}</h2>
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Description:
        </label>
        <input
          type="text"
          id="description"
          value={newTodo.description}
          onChange={handleChange("description")}
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="priority" className={styles.label}>
          Priority:
        </label>
        <select
          id="priority"
          value={newTodo.priority}
          onChange={handleChange("priority")}
          className={styles.select}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      {
        subject === 'Edit' &&
      <div className={styles.formGroup}>
        <label htmlFor="isDone" className={styles.label}>
          Is Done:
        </label>
        <input
          type="checkbox"
          id="isDone"
          checked={newTodo.isdone}
          onChange={() => handleIsDoneChange(!newTodo.isdone)}
          className={styles.checkbox}
        />
      </div>
      }
      <button type="submit" className={styles.addButton}>
      {subject === 'Add' ? "+" : 'Edit'}
      </button>
    </form>
  );
};

export default AddOrEditTodo;
