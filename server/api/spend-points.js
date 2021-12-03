const router = require("express").Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../database");
const { check, validationResult } = require("express-validator");

router.get('/', (req, res, next) => {
  res.render("index", { title: "Hey", message: "Hello there!", data: 'balances' });

})

router.put("/", asyncHandler, (req, res, next) => {
  // const {id, payer, points} = req.body
  // db.serialize(()=>{
  //   const statement = db.prepare(`INSERT INTO fetch_rewards VALUES (?), ()`);
  //   for (const i = 0; i < 10; i++) {
  //     statement.run("Ipsum " + i);
  //   }
  //   statement.finalize();
  // })
});


module.exports = router;
