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
    const { user } = req
    const { propertyID } = req.params
    const property = await Property.findOne({
      _id: propertyID,
      tenant: user?.id
    })
    if (!property) {
      res.status(404).json({
        status: 'Fail',
        message: 'No property found'
      })
    }
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
    const { user } = req
    const { propertyID } = req.params

    const property = await Property.find({ _id: propertyID, tenant: user?.id })
    if (!property) {
      res.status(404).json({
        status: 'Fail',
        message: 'No property found'
      })
    }
    const billProperty = await Bills.find({})
    res.status(200).json({
      status: 'Success',
      message: 'Property found',
      data: property
    })
    console.log(propertyID)
  } catch (error) {}
}
