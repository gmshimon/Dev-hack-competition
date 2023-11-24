const express = require('express')
const verifyToken = require('../../Middleware/verifyToken')
const {
  addProperty,
  payAllBills,
  getAllBills
} = require('./property.controller')
const verifyProperty = require('../../Middleware/verifyProperty')
const router = express.Router()

router
  .route('/pay-all/:propertyID/:billID')
  .patch(verifyToken, verifyProperty, payAllBills)
router
  .route('/get-all-bills/:propertyID')
  .get(verifyToken, verifyProperty, getAllBills)
router.route('/add-property').post(verifyToken, addProperty)

module.exports = router
