const {Router} = require("express");
const router = Router();
const controller = require("./controller");
const sevice = require('./servise');

router.get("/" , sevice.findAllTodos);
router.get("/:id" , sevice.findTodoById);
router.post("/" ,sevice.createTodos);
router.put("/:id" ,sevice.updateTodoById);



module.exports = router

