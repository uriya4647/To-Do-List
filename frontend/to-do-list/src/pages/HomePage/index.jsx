import { useState, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import { getAllTodos } from "../../utils/queris/queris";
import AddOrEditTodo from "../../components/AddOrEditTodo";
import AddTodo from '../../components/AddTodo';
const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
     
    getTodos();
      
  }, []);

  const getTodos = () => {
    getAllTodos()
      .then((todo) => {
        setTodos(todo.allTodos);
      })
      .catch((err) => alert("erorr"));
  };


  return (
    <>
      <AddTodo  getTodos = { getTodos }  />
      <ToDoList todos={todos} getTodos = { getTodos } />
    </>
  );
};

export default HomePage;
