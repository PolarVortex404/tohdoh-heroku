"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      }),
        Task.hasMany(models.Skip, {
          foreignKey: "task_id",
          as: "skips",
        });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      star_rating: DataTypes.INTEGER,
      deadline: DataTypes.DATE,
      user_id: DataTypes.INTEGER,
      estimated_duration: DataTypes.INTEGER,
      time_spent: DataTypes.INTEGER,
      complete_date: DataTypes.DATE,
      frequency: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
