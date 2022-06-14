const express = require("express");
const router = express.Router();

//db models
// const user = require("../models/user");
const Skip = require("../models").Skip;
// const User = require("../models").User;
const Task = require("../models").Task;

const { Sequelize, Op } = require("sequelize");

//Json Web Token for auth0
const { checkJwt } = require("../middleware/check-jwt.middleware");
const {
  checkPermissions,
} = require("../middleware/check-permissions.middleware");

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", checkJwt,  (req, res) => {
  console.log("getting all skips for user");
  Skip.findAll({
    where: {
      user_id: {
        [Op.eq]: req.user.sub,
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

router.post("/",checkJwt, (req, res) => {
  console.log("creating a skip");
  Skip.create(
    {
      user_id: req.user.sub,
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
