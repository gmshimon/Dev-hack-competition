const express = require('express')
const verifyToken = require('../../Middleware/verifyToken')
const { addProperty } = require('./property.controller')
const router = express.Router()

router.route('/add-property').post(verifyToken, addProperty)

module.exports = router
