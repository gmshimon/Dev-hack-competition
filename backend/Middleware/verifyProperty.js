const Property = require('../Models/Property/property.modules')

module.exports = async (req, res, next) => {
  try {
    const { user } = req
    const { propertyID } = req.params
    const property = await Property.findOne({
      _id: propertyID,
      tenant: user?.id
    })
    if (!property) {
      return res.status(404).json({
        status: 'Fail',
        message: 'This property doest not belong to the specified tenant'
      })
    }
    req.property = property
    next()
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
