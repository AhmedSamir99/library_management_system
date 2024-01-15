require("dotenv").config();
// const {DataTypes } = require("sequelize");
const path = require("path");
const sequelize = require('../../../database'); // Adjust the path to point to where you export your Sequelize instance
module.exports = (sequelize, DataTypes) => {
  const Book= sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      availableQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      shelfLocation: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Book",
      tableName: "books",
      timestamps: false,
    }
  );
  Book.associate = function (models) {
  };

  return Book;
};
