// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
// const auth = require('../middleware/auth');
//
// //user model
// const User = require('../model/User');
//
//
// //authenticate user
// router.post('/',(req, res) => {
//   const{ email, password} = req.body;
//
//   if( !email || !password){
//     return res.status(400).json({msg: 'Please fill out all information' });
//   }
//
//   //checks for users
//   User.findOne({ email })
//     .then(user => {
//       if(!user) return res.status(400).json({ msg: 'User does not exist'});
//
//
//       //validation for Password
//       bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if(!isMatch) return res.status(400).json({msg: 'Incorrect Credentials'});
//
//           jwt.sign(
//             { id: user.id },
//             config.get('jwtSecret'),
//             {expiresIn: 1800},
//             (e, token) => {
//               if(e) throw e;
//               res.json({
//                 token,
//                 user: {
//                   id: user.id,
//                   name: user.name,
//                   email: user.email
//                 }
//               });
//             }
//           )
//         })
//     })
// });
//
//
// //get request to auth/users
// //get data
// //private access
//
// router.get('/user', auth, (req, res) => {
//     User.findById(req.user.id)
//     .select('-password')
//     .then(user => res.json(user));
// });
//
// module.exports = router;
