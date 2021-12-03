const router = require("express").Router()
const { csrfProtection, asyncHandler } = require('../utils');
const db = require("../database")

router.get('/', (req, res, next) => {
  res.render("index", { title: "Hey", message: "Hello there!", data: 'balances' });

})



module.exports = router
