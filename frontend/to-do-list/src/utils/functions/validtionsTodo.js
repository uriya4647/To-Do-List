export const validtionTodos = (todos = {}) => {
    const priority = ["low", "medium", "high"];

    return todos.description && priority.includes(todos.priority)
      ? true
      : false;
  };
