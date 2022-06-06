const express = require("express");
// const user = require("../models/user");
const Skip = require("../models").Skip;
const User = require("../models").User;
const Task = require("../models").Task;

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/", (req, res) => {
  console.log("creating a skip");
  Skip.create(
    {
      user_id: req.body.user_id,
      task_id: req.body.task_id,
    },
    {
      include: [
        {
          model: User,
          as: "user",
        },
        {
          model: Task,
          as: "task",
        },
      ],
    }
  )
    .then((skip) => {
      res.status(200).send(skip);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;
