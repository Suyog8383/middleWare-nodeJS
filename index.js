const express = require("express");
const reqFilter = require("./middleWare");
const app = express();
const route = express.Router();

//middleware in nodejs
//application level middleware
//route level middleware

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please provide age");
//   } else if (req.query.age < 18) {
//     resp.send("you are child bro");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);
route.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home page");
});

route.get("/profile", reqFilter, (req, resp) => {
  resp.send("welcome to profile Page");
});

app.use("/", route);
app.listen(8300);
