import mainRequest from "../serverRequest/mainRequest";

export const setNewTodos = async ( newTodo ) =>{
   
   return await mainRequest("/todos", "POST", newTodo)
}
export const updateTodos = async ( updateTodo , id ) =>{
   
   return await mainRequest(`/todos/${id}`, "PUT", updateTodo)
}

export const getAllTodos = async () =>{
 
   return await  mainRequest("todos", "GET");
}

export const deleteTodos = async (id) => {

  return await mainRequest(`todos/${id}`, "DELETE", {id})

}