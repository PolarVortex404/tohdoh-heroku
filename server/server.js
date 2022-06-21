const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const path = require('path')

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const {  task, skip } = require("./routes");

app.use(express.json());
app.use(express.urlencoded());
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);
app.use(
  cors()
);
app.use("/tasks", task);
app.use("/skips", skip);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use(express.static(path.join(__dirname, '../client/build')

))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/../client/build/index.html'))
})


app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

