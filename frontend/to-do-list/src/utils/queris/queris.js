import mainRequest from "../serverRequest/mainRequest";

export const setNewTodos = async (newTodo) => {
  return await mainRequest("/todos", "POST", newTodo);
};
export const updateTodos = async (updateTodo, id) => {
  return await mainRequest(`/todos/${id}`, "PUT", updateTodo);
};

export const getAllTodos = async () => {
  return await mainRequest("todos", "GET");
};
export const getAllTodosByDone = async (selector, currentPage = 0, limit) => {
 

  return await mainRequest(
    `todos/sort/${selector}/${currentPage}/${limit}`,
    "GET"
  );
};
export const getAllTodosByPriorty = async (
  selector,
  currentPage = 0,
  limit
) => {
  return await mainRequest(
    `todos/sort/${selector}/${currentPage}/${limit}`,
    "GET"
  );
};

export const deleteTodos = async (id) => {
  return await mainRequest(`todos/${id}`, "DELETE", { id });
};
export const getPageCount = async () => {
  return await mainRequest(`todos/get-page-count`, "POST");
};

export const getByPagintion = async (sort, currentPage = 0, limit) => {
  return await mainRequest(
    `todos/get-by-pagintion/${currentPage}/${limit}`,
    "POST"
  );
};
