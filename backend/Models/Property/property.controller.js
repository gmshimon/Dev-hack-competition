const { generateRandomNumber } = require('../../utilis/generateRandrom')
const Bills = require('../Bills/bills.modules')
const User = require('../User/user.modules')
const Property = require('./property.modules')

module.exports.addProperty = async (req, res, next) => {
  try {
    const user = req.user
    const property_data = req.body

    property_data.tenant = user.id
    const addProperty = await Property.create(property_data) // save the property
    // const getUser = await User.findOne({ _id: user.id }).select('-password') //get the single user
    const updateUser = await User.updateOne(
      { _id: user.id },
      {
        $push: { property: user.id }
      }
    )

    console.log(user)
    res.status(200).json({
      status: 'Success',
      message: 'Successfully added property',
      data: addProperty
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Fail to add property',
      error: error.message
    })
  }
}

//get all bills of a property
module.exports.getAllBills = async (req, res, next) => {
  try {
    const { property } = req
    const billOfProperty = await Bills.find({ property: property._id })

    res.status(200).json({
      status: 'Success',
      message: 'All Bills retrieved successfully',
      data: billOfProperty
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}

// Pay all the bills of a property
// TODO: update the bill of a property
module.exports.payAllBills = async (req, res, next) => {
  try {
    const { property } = req
    const { billID } = req.params
    const billProperty = await Bills.findOne({
      _id: billID,
      property: property._id
    }).select('-__v -property') // fetch the bill information using bill id

    // check if the bill exists
    if (billProperty.length === 0) {
      return res.status(404).json({
        status: 'Fail',
        message: 'NO Bill data found'
      })
    }

    //check if the bills have been paid
    if (billProperty?.isAllPayment?.paid) {
      return res.status(401).json({
        status: 'OK',
        message: 'Already paid'
      })
    }

    const randomNumber = generateRandomNumber() // this random number will be used as transaction id

    const updateData = {
      water: {
        amount: billProperty?.water?.amount,
        payment: true
      },
      gas: {
        amount: billProperty?.gas?.amount,
        payment: true
      },
      power: {
        amount: billProperty?.power?.amount,
        payment: true
      },
      isAllPayment: {
        paid: true,
        totalAmount: billProperty?.isAllPayment?.totalAmount
      },
      transactionID: randomNumber
    }
    const updateBill = await Bills.updateOne(
      { _id: billID },
      {
        $set: updateData
      }
    )
    res.status(200).json({
      status: 'Success',
      message: 'Property found',
      data: updateBill
    })

    // console.log(propertyID)
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
