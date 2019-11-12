//require("dotenv").config()
const jwt = require('jsonwebtoken')

//get token sent from front end
const auth = (req, res, next) => {
  const token = req.header('x-auth-token')

  //check for token
  if(!token) return res.status(401).json({ msg: 'Unauthorized request: Missing Token'})
  
  try{
    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //add user from payload
    req.user = decoded
    next();
  } catch(e) {
    res.status(400).json({ msg: 'Token is not valid' })
  }
}

module.exports = auth;