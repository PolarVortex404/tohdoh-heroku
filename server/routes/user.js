const express = require("express");
const router = express.Router();
const User = require("../models").User;
const Skip = require("../models").Skip;
const Task = require("../models").Task;

const { Op } = require("sequelize");
const skip = require("../models/skip");
const user = require("../models/user");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (res, req) => {
  console.log("verifying login info");
});

router.get("/:userId/tasks", (req, res) => {
  console.log("getting all tasks for user");
  Task.findAll({
    where: {
      user_id: {
        [Op.eq]: req.params.userId,
      },
    },
  })
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
router.get("/:userId/skips", (req, res) => {
  console.log("getting all skips for user");
  Skip.findAll({
    where: {
      user_id: {
        [Op.eq]: req.params.userId,
      },
    },
  })
    .then((skips) => {
      res.status(200).send(skips);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.post("/", (res, req) => {
  console.log("registering user");
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.put("/:userId", (req, res) => {
  console.log("updating user");
  User.findByPk(req.params.userId).then((user) => {
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    user
      .update({
        firstName: req.body.firstName || user.firstName,
        lastName: req.body.lastName || user.lastName,
        email: req.body.email || user.email,
        password: req.body.password || user.password,
      })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  });
});

module.exports = router;
