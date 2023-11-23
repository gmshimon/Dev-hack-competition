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
