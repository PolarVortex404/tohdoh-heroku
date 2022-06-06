const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const { user, task, skip } = require("./routes");

app.use(express.json());
app.use(express.urlencoded());


app.use("/users", user);
app.use("/tasks", task);
app.use("/skips", skip);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
