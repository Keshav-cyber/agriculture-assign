const jwt = require("jsonwebtoken")

const authenticate = function (req, res, next) {
    try {
      //checking if token is available
      let token = req.headers["X-Api-Key"]
      if (!token) token = req.headers["x-api-key"]
      if (!token) return res.status(400).send({ status: false, msg: "token must be present" })
  
      //decoding token
        let decodedToken = jwt.verify(token, 'agriculture-app', function (err, decodedToken) {
        if (err) return res.status(400).send({ status: false, msg: "token is not valid or expired" })
        req.userLogedIn = decodedToken.userId
        next()
      })
  
    } catch (err) {
      return res.status(500).send({ status: false, Error: err.message })
    }
  }



  module.exports = { authenticate }