const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const Todos = sequelize.define("Todos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "low",
    validate: {
      isIn: {
        args: [["low", "medium", "high"]],
        msg: "Invalid priority",
      },
    },
  },
  isdone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Todos.sync()
  .then(() => {
    console.log("Todos table created successfully");
  })
  .catch((error) => {
    console.error("Error creating Todos table:", error);
  });

module.exports = Todos;
