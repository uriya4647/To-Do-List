const {Router} = require("express");
const router = Router();
const service = require('./servise');

router.get("/" , service.findAllTodos);
router.get("/:id" , service.findTodoById);
router.get("/sort/priorty/:currentPage/:limit" , service.findAllTodosByPriorty);
router.get("/sort/done/:currentPage/:limit" , service.findAllTodosByDone);
router.post("/get-page-count" , service.getNumOfPage);
router.post("/get-by-pagintion/:currentPage/:limit" , service.getByPagintion);
router.post("/" ,service.createTodos);
router.put("/:id" ,service.updateTodoById);
router.delete("/:id" ,service.deleteTodoById);



module.exports = router

