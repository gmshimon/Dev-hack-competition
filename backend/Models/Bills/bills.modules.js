const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')
const getCurrentMonth = () => {
  const currentDate = new Date()
  const formattedDate = `${currentDate.toLocaleString('default', {
    month: 'long'
  })}-${currentDate.getFullYear()}`

  return formattedDate
}

const billSchema = mongoose.Schema({
  water: {
    amount: {
      type: String,
      required: [true, 'Please provide water bill']
    },
    payment: {
      type: Boolean,
      default: false
    }
  },
  gas: {
    amount: {
      type: String,
      required: [true, 'Please provide gas bill']
    },
    payment: {
      type: Boolean,
      default: false
    }
  },
  power: {
    amount: {
      type: String,
      required: [true, 'Please provide power bill']
    },
    payment: {
      type: Boolean,
      default: false
    }
  },
  billDate: {
    type: String,
    default: getCurrentMonth()
  },
  dueDate: {
    type: String,
    required: [true, 'please provide a due date']
  },
  transactionID: {
    type: String
  },
  isAllPayment: {
    totalAmount: {
      type: String
    },
    paid: {
      type: Boolean,
      default: false
    }
  },
  property: {
    type: ObjectId,
    ref: 'Property',
    required: [true, 'please provide property']
  }
})

billSchema.pre('save', function (next) {
  try {
    const totalAmount =
      parseFloat(this.water.amount) +
      parseFloat(this.gas.amount) +
      parseFloat(this.power.amount)

    this.isAllPayment.totalAmount = totalAmount.toString()
    next()
  } catch (error) {
    next(error)
  }
})

const Bills = mongoose.model('Bills', billSchema)

module.exports = Bills
