const controller = require("./controller");

const createTodos = async (req, res) => {
  console.log("req.body", req.body);
  const { description, priority, isdone } = req.body;
  console.log("req", { description, priority, isdone });
  const todo = {
    description,
    priority,
    isdone,
  };

  try {
    const createTodo = await controller.createTodo(todo);
    const newTodo = await controller.saveTodos(createTodo);
    console.log(`User created with id: ${newTodo.id}`);
    res
    .status(201)
    .json({
        newTodo,
      });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400)
    .json({ error });
  }
};

const findAllTodos = async (req, res) => {
  try {
    const allTodos = await controller.findAll();

    res
    .status(200)
      .json({
        allTodos,
      });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(400)
    .json({ error });
  }
};

const findTodoById = async ( req , res) =>{
    const  id  = req.params.id


    try {
        const foundTodo = await controller.findById(id);
        if (!foundTodo) throw "the id not exsist"
        
        res
        .status(200)
          .json({
            foundTodo,
          });
      } catch (error) {
        console.error("Error creating user:", error);
    
        res.status(404)
        .json({ error });
      }
} 

const updateTodoById = async (req , res) =>{

    const  id  = req.params.id
    const { description, priority, isdone } = req.body;

    try {
        const foundTodo = await controller.findById(id);
        if (!foundTodo) throw "the id not exsist"
        
        console.log("isdone" ,isdone );

        updateTodo = await controller.updateTodos(id , description, priority, isdone );
        res
        .status(200)
          .json({
            updateTodo,
          });
      } catch (error) {
        console.error("Error creating user:", error);
    
        res.status(404)
        .json({ error });
      }
}

module.exports = { createTodos, findAllTodos ,findTodoById ,updateTodoById};
