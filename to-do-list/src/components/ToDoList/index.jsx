import { useState } from "react"
import ToDoItem from "../ToDoItem"
import styles from "./style.module.css"

const ToDoList = () =>
{

    const [todos , setTodos] = useState([{priority: "low" , subject: "uri" }])
 
    return (
<>
     {   todos.map((todo , index) => {
            
           return <ToDoItem  key = {index.toString()} subject={todo.subject} priority = {todo.priority} />
        })
    }
{/* <button className={styles.addButton} onClick={onAdd}> */}
<button className={styles.addButton} >
          +
        </button>
</>

    )
}

export default ToDoList