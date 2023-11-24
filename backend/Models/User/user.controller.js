const express = require('express')
const User = require('./user.modules')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')
const { generateToken } = require('../../utilis/token')
const Property = require('../Property/property.modules')

module.exports.postUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'User created successfully'
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to signup',
      error: error.message
    })
  }
}

module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, pass } = req.body
    if (!email || !pass) {
      return res.status(403).json({
        status: 'Fail',
        message: 'Please provide credentials'
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        status: 'Fail',
        message: 'No user with that email address'
      })
    }

    const isPasswordValid = bcrypt.compareSync(pass, user.password)
    if (!isPasswordValid) {
      return res.status(403).json({
        status: 'Fail',
        message: 'Wrong password'
      })
    }

    const token = generateToken(user)

    const { password, ...others } = user.toObject()
    res.status(200).json({
      status: 'Success',
      message: 'Login successful',
      data: others,
      token: token
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to login',
      error: error
    })
  }
}

module.exports.getMe = async (req, res, next) => {
  try {
    const email = req.user?.email

    const user = await User.findOne({ email: email }).select('-password')

    res.status(200).json({
      status: 'Success',
      message: 'Verified',
      data: user
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to fetch data',
      error: error.message
    })
  }
}
module.exports.getMyProperty = async (req, res, next) => {
  try {
    const { user } = req
    const myProperty = await Property.find({ tenant: user.id })
      .select('-tenant -__v')
      .populate({
        path: 'bills',
        select: '-property -__v'
      })
    res.status(200).json({
      status: 'Success',
      message: 'Property successfully retrieved',
      data: myProperty
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to fetch data',
      error: error.message
    })
  }
}
