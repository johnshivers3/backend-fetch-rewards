const express = require("express");
const router = require("express").Router();
const cors = require("cors");


const app = express();
const port = 8081;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Success!!");
});

app.listen(port, () => {
  console.log(`Express Server listening on port:${port}...`);
});
