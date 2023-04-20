const controller = require("./controller");

const createTodos = async (req, res) => {
  const { description, priority, isdone } = req.body;

  const todo = {
    description,
    priority,
    isdone,
  };

  try {
    const createTodo = await controller.createTodo(todo);
    const newTodo = await controller.saveTodos(createTodo);
    console.log(`User created with id: ${newTodo.id}`);
    res.status(201).json({
      newTodo,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};

const findAllTodos = async (req, res) => {
  try {
    const allTodos = await controller.findAll();
    const orderIsDone = orderByNotDone(allTodos);

    res.status(200).json({
      allTodos: orderIsDone,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};

const findTodoById = async (req, res) => {
  const id = req.params.id;

  try {
    const foundTodo = await controller.findById(id);
    if (!foundTodo) throw "the id not exsist";

    res.status(200).json({
      foundTodo,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(404).json({ error });
  }
};

const updateTodoById = async (req, res) => {
  const id = req.params.id;
  const { description, priority, isdone } = req.body;

  try {
    const foundTodo = await controller.findById(id);
    if (!foundTodo) throw "the id not exsist";

    console.log("isdone", isdone);

    updateTodo = await controller.updateTodos(
      id,
      description,
      priority,
      isdone
    );

    res.status(200).json({
      updateTodo,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(404).json({ error });
  }
};

const deleteTodoById = async (req, res) => {
  const id = req.params.id;

  try {
    const foundTodo = await controller.findById(id);
    if (!foundTodo) throw "the id not exsist";

    const deleteTodo = await controller.deleteTodos(id);
    res.status(200).json({
      deleteTodo,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(404).json({ error });
  }
};

const findAllTodosByPriorty = async (req, res) => {
  const currentPage = req.params.currentPage;
  const limit = req.params.limit;

  try {
    const todosByPagnation = await getPagintion(currentPage, limit);

    const orderByPriorty = orderByPriority(todosByPagnation.current);

    res.status(200).json({
      allTodos: orderByPriorty,
      countPage: todosByPagnation.countPage,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};
const findAllTodosByDone = async (req, res) => {
  const currentPage = req.params.currentPage;
  const limit = req.params.limit;
  try {
    const todosByPagnation = await getPagintion(currentPage, limit);
    const orderIsDone = orderByDone(todosByPagnation.current);

    res.status(200).json({
      allTodos: orderIsDone,
      countPage: todosByPagnation.countPage,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};
const getNumOfPage = async (req, res) => {
  try {
    const count = await getCountOfObjects();
    res.status(200).json({
      count,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};

const getByPagintion = async (req, res) => {
  const currentPage = req.params.currentPage;
  const limit = req.params.limit;

  try {
    const todosByPagnation = await getPagintion(currentPage, limit);
    const orderIsDone = orderByNotDone(todosByPagnation.current);

    res.status(200).json({
      allTodos: orderIsDone,
      countPage: todosByPagnation.countPage,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400).json({ error });
  }
};

function orderByNotDone(arr) {
  return arr.sort((a, b) => Number(a.isdone) - Number(b.isdone));
}
function orderByDone(arr) {
  return arr.sort((a, b) => Number(b.isdone) - Number(a.isdone));
}

function orderByPriority(arr) {
  const priorities = { low: 0, medium: 1, high: 2 };

  return arr.sort((a, b) => {
    return priorities[a.priority] - priorities[b.priority];
  });
}

async function getPagintion(currentPage, limit) {
  const countObjects = await getCountOfObjects();

  const countPage = Math.ceil(countObjects / limit); // 7 / 5

  if (currentPage > countPage)
    throw " currentPage cannot bigger then countPage";
  return {
    current: await controller.findByPagntion(limit * currentPage, limit),
    countPage: countPage,
  };
}

async function getCountOfObjects() {
  return await controller.findCountRowOfTable();
}

module.exports = {
  createTodos,
  findAllTodos,
  findTodoById,
  updateTodoById,
  deleteTodoById,
  findAllTodosByPriorty,
  findAllTodosByDone,
  getPagintion,
  getNumOfPage,
  getByPagintion,
};
