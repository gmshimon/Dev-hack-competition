const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please provide a first name']
    },
    last_name: {
      type: String,
      required: [true, 'Please provide a last name']
    },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please enter a valid email'],
      required: [true, 'Please provide email'],
      lowercase: true,
      unique: [true, 'Email has already been used'],
      trim: true
    },
    phone: {
      type: String
    },
    admin: {
      type: Boolean,
      default: false
    },
    password: {
      type: String,
      required: [true, 'please enter a valid password']
    },
    confirmPassword: {
      type: String,
      required: [true, 'Please retype your password'],
      validate: {
        validator: function (value) {
          return value === this.password
        },
        message: 'Password does not match'
      }
    },
    property: [
      {
        type: ObjectId,
        ref: 'Property'
      }
    ],
    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (!err) {
        this.password = hash
        ;(this.confirmPassword = undefined), next()
      }
      if (err) this.password.message = err
    })
  })
})

const User = mongoose.model('User', userSchema)

module.exports = User
