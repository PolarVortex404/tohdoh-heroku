"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skip.belongsTo(models.Task, {
        foreignKey: "task_id",
        as: "task",
      });
    }
  }
  Skip.init(
    {
      task_id: DataTypes.INTEGER,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Skip",
    }
  );
  return Skip;
};
