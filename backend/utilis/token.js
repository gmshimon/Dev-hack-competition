const jwt = require('jsonwebtoken')

module.exports.generateToken = userInfo => {
  const playLoad = {
    id: userInfo._id,
    email: userInfo?.email,
    admin: userInfo?.admin
  }

  const token = jwt.sign(playLoad, process.env.TOKEN_SECRET, {
    // expiresIn: null
  })

  return token
}
