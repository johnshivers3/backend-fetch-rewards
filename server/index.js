const express = require("express");
const apiRouter = require("./api");

const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//
app.use(apiRouter);
app.get("/", (req, res) => {
  res.send("Success!!");
});

// Error Handler
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

app.listen(port, () => {
  console.log(`Express Server listening on port:${port}...`);
});
