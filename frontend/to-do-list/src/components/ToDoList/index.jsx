import { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem";
import styles from "./style.module.css";
import mainRequest from "../../utils/serverRequest/mainRequest";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    //whatt to do whit erorr
    mainRequest("todos", "GET")
      .then((todo) => {
        setTodos(todo.allTodos);
        // setTaskDone(todo.allTodos.isdone)
      })
      .catch((err) => console.log(err));
  }, []);

  const onToggleChange = (id, isDone) => {
    console.log("isDone", isDone);
    mainRequest(`todos/${id}`, "PUT", { isdone: isDone })
      .then((todoUpdate) => {
        console.log("sucsess: ", todoUpdate);
      })
      .catch((err) => console.log(err));
  };

  console.log(todos);

  return (
    <>
      {todos &&
        todos.map((todo, index) => {
          return (
            <ToDoItem
              key={index.toString()}
              id={todo.id}
              description={todo.description}
              priority={todo.priority}
              isdone={todo.isdone}
              onToggleChange={onToggleChange}
            />
          );
        })}
      {/* <button className={styles.addButton} onClick={onAdd}> */}
     
      <button className={styles.addButton}>+</button>
    </>
  );
};

export default ToDoList;
