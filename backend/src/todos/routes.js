const {Router} = require("express");
const router = Router();
const sevice = require('./servise');

router.get("/" , sevice.findAllTodos);
router.get("/:id" , sevice.findTodoById);
router.post("/" ,sevice.createTodos);
router.put("/:id" ,sevice.updateTodoById);
router.delete("/:id" ,sevice.deleteTodoById);



module.exports = router

