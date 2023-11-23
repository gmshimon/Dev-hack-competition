const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

const propertySchema = mongoose.Schema({
  longitude: {
    type: 'String'
  },
  latitude: {
    type: 'String'
  },
  district: {
    type: String,
    required: [true, 'please provide district name']
  },
  street: {
    type: String,
    required: [true, 'please provide street/building name'],
    maxLength: [300, 'Street/Building name is too large']
  },
  unit: {
    type: String,
    required: [true, 'please provide unit number']
  },
  tenant: {
    type: ObjectId,
    ref: 'User'
  },
  bills: [
    {
      type: ObjectId,
      ref: 'Bills'
    }
  ]
})

const Property = mongoose.model('Property', propertySchema)
module.exports = Property
