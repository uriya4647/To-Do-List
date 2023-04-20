const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "todos",
  "postgres",
  process.env.POSTGRES_PASS,
  {
    dialect: "postgres",
    logging: true,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
