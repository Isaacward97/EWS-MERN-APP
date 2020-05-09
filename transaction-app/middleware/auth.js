// const config = require('config');
// const jwt = require('jsonwebtoken');
//
// function auth(req, res, next){
//   const token = req.header('x-auth-token');
//
//   //checks for jwtSecret
//   if(!token) res.status(401).json({msg: 'No token, No entry'});
//
//   try {
//     //verify jwt
//       const decode = jwt.verify(token, config.get('jwtSecret'));
//
//       //adds user from payload
//       req.user = decode;
//       next();
//   } catch (e) {
//     res.status(400).json({msg: 'Token Invalid'});
//   }
// }
//
// module.exports = auth;


//orignally authorisation code for log in system
//gets web token and identifies user with it
