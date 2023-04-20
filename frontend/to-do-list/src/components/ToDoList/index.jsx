import PropTypes from "prop-types";
import ToDoItem from "../ToDoItem";

import { updateTodos, deleteTodos } from "../../utils/queris/queris";

const ToDoList = ({ todos, getTodos }) => {
  const onToggleChange = (id, isDone) => {
    updateTodos({ isdone: isDone }, id)
      .then((todoUpdate) => {
        getTodos();
      })
      .catch((err) => alert("erorr"));
  };

  const onDelete = (id) => {
    deleteTodos(id)
      .then((todoUpdate) => {
      
        getTodos();
      })
      .catch((err) => alert("erorr"));
  };

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
              onDelete={onDelete}
              getTodos={getTodos}
            />
          );
        })}
    </>
  );
};

export default ToDoList;

ToDoItem.prototype = {
  todos: PropTypes.array,
  getTodos: PropTypes.func,
};
