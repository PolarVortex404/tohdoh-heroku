const express = require("express");
const router = express.Router();
const Skip = require("../models").Skip;
const User = require("../models").User;
const Task = require("../models").Task;

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/", (res, req) => {
  console.log("Creating a task");
  Task.create(
    {
      user_id: req.body.user_id,
      title: req.body.title,
      description: req.body.description,
      star_rating: req.body.star_rating,
      deadline: req.body.deadline,
      estimated_duration: req.body.estimated_duration,
      time_spent: req.body.time_spent,
      complete_date: req.body.complete_date,
      frequency: req.body.frequency,
    },
    {
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    }
  )
    .then((task) => {
      res.status(200).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.put("/:taskId", (req, res) => {
  console.log("Updating task");
  Task.findByPk(req.params.taskId).then((task) => {
    if (!task) {
      return res.status(404).send({
        message: "Task not found",
      });
    }
    task
      .update({
        user_id: req.body.user_id || task.user_id,
        title: req.body.title || task.title,
        description: req.body.description || task.description,
        star_rating: req.body.star_rating || task.star_rating,
        deadline: req.body.deadline || task.deadline,
        complete_date: req.body.complete_date || task.complete_date,
        frequency: req.body.frequency || task.frequency,
      })
      .then((task) => {
        res.status(200).send(task);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
});

module.exports = router;
