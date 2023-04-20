const Todos = require("./todos.moduel");

const findAll = async () => {
  return await Todos.findAll();
};

const findByPagntion = async (offset, limit) => {
  return await Todos.findAll({ offset: offset, limit: limit });
};

const findCountRowOfTable = async () => {
  return await Todos.count();
};

const findById = async (id) => {
  return await Todos.findByPk(id);
};

const createTodo = async (todo) => {
  return await Todos.build(todo);
};

const saveTodos = async (newTodo) => {
  return await newTodo.save();
};

const updateTodos = async (id, description, priority, isdone) => {
  return await Todos.update(
    {
      description: description,
      priority: priority,
      isdone: isdone,
    },
    {
      where: {
        id: id,
      },
      returning: true,
    }
  );
};

const deleteTodos = async (id) => {
  return await Todos.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findAll,
  findById,
  createTodo,
  saveTodos,
  deleteTodos,
  updateTodos,
  findByPagntion,
  findCountRowOfTable,
};
