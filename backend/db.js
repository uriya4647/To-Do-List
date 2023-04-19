const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("todos", "postgres", "204647028", {
  dialect: "postgres",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
