const express = require('express')
const {
  postUser,
  loginUser,
  getMe,
  getMyProperty
} = require('./user.controller')
const verifyToken = require('../../Middleware/verifyToken')

const router = express.Router()

router.route('/signup').post(postUser)
router.route('/login').post(loginUser)
router.route('/get-property').get(verifyToken, getMyProperty)
router.route('/me').get(verifyToken, getMe)

module.exports = router
