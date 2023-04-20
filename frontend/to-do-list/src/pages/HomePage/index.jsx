import { useState, useEffect } from "react";
import ToDoList from "../../components/ToDoList";
import {
  getAllTodosByDone,
  getAllTodosByPriorty,
  getByPagintion,
} from "../../utils/queris/queris";
import AddTodo from "../../components/AddTodo";
import SortSelctor from "../../components/SortSelction";
import Pagination from "../../components/Pagination";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [orderBy, setOrderBy] = useState("notdone");
  const [pagesCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    getTodos(orderBy, currentPage, limit);
  }, [currentPage, orderBy, limit]);

  const handleSortOrderChange = (event) => {
    setOrderBy(event);
  };

  const getTodos = (sort = orderBy, current = currentPage, line = limit) => {
    const getAll =
      sort === "notdone"
        ? getByPagintion
        : sort === "done"
        ? getAllTodosByDone
        : getAllTodosByPriorty;
    getAll(sort, current - 1, line)
      .then((pagination) => {
        
        setPageCount(pagination.countPage);
        setTodos(pagination.allTodos);
        setOrderBy(sort);
      })
      .catch((err) => alert("erorr"));
  };

  return (
    <>
      <AddTodo getTodos={getTodos} />
      <SortSelctor
        getTodos={getTodos}
        orderBy={orderBy}
        handleSortOrderChange={handleSortOrderChange}
      />
      {todos && <ToDoList todos={todos} getTodos={getTodos} />}
      {pagesCount && (
        <Pagination
          pagesCount={pagesCount}
          limit={6}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default HomePage;
