const express = require("express");
const apiRouter = require("./api/index.js");
const {csrfProtection} = require('./utils')
const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//
app.set("views", "./server/views");
app.set("view engine", "pug");

app.use("/api", apiRouter);

app.get("/", function (req, res, next) {
  res.render("index", { title: "Hey", message: "Hello there!", data: '' });
});
app.post("/", function (req, res, next) {
  res.render("index", { title: "Hey", message: "Good Bye there!", data: '' });
});
// // Error Handler
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.listen(port, () => {
  console.log(`Express Server listening on port:${port}...`);
});
