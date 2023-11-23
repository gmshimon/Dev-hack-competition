const express = require('express')
const { addBills } = require('./bills.controller')
const verifyAdmin = require('../../Middleware/verifyAdmin')
const router = express.Router()

router.route('/add-bills').post(verifyAdmin, addBills)

module.exports = router
