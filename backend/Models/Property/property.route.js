const express = require('express')
const verifyToken = require('../../Middleware/verifyToken')
const {
  addProperty,
  payAllBills,
  getAllBills
} = require('./property.controller')
const router = express.Router()

router.route('/pay-all/:propertyID').post(verifyToken, payAllBills)
router.route('/get-all-bills/:propertyID').get(verifyToken, getAllBills)
router.route('/add-property').post(verifyToken, addProperty)

module.exports = router
