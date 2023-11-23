const Property = require('../Property/property.modules')
const Bills = require('./bills.modules')

module.exports.addBills = async (req, res, next) => {
  try {
    const data = req.body
    const result = await Bills.create(data)
    const propertyID = data.property

    const property = await Property.updateOne(
      { _id: propertyID },
      {
        $push: { bills: result._id }
      }
    )
    res.status(200).json({
      status: 'Success',
      message: 'Successfully bills added',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
