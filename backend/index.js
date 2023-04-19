const express = require("express");
const app = express();
require('dotenv').config()
const todosRoutes = require("./src/todos/routes")
const cors = require('cors')
const port = process.env.PORT || 8090;

app.use(cors());
app.use(express.json())

app.use('/todos', todosRoutes)

app.use((req, res, next) => {
    const error = new Error('Soory, Not Found !');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            error: error.status
        }
    })
})

app.listen(port, ()=> console.log(`runner in port: ${port}`))