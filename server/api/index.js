const router = require("express").Router()
const addTransactions = require("./add-transactions")
const getAllBalances = require("./get-all-balances")
const spendPoints = require("./spend-points")
const { csrfProtection, asyncHandler } = require("../utils");

router.use('/add-transaction', addTransactions)
router.use('/get-balances', getAllBalances)
router.use('/spend-points', spendPoints)

module.exports = router
