import React, { useState } from "react";
import "./style.module.css";
import {validtionTodos} from '../../utils/functions/validtionsTodo';
import {setNewTodos} from '../../utils/queris/queris';

function AddTodo({ getTodos }) {
  const [newTodo, setNewTodo] = useState({
    description: "",
    priority: "low",
    isdone: false,
  });

  const handleChange = (prop) => (event) => {
    setNewTodo({ ...newTodo, [prop]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (validtionTodos(newTodo)) {
      setNewTodos( newTodo)
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
    <form className="todo-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={newTodo.description}
          onChange={handleChange("description")}
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={newTodo.priority}
          onChange={handleChange("priority")}
          className="select-field"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="submit-button">
        +
      </button>
    </form>
  );
}

export default AddTodo;
