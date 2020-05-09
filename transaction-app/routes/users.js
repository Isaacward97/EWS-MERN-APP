// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const config = require('config');
// const jwt = require('jsonwebtoken');
//
// //user model
// const User = require('../model/User');
//
// router.post('/',(req, res) => {
//   const{ name, email, password} = req.body;
//
//   if(!name || !email || !password){
//     return res.status(400).json({msg: 'Please fill out all information' });
//   }
//
//   //checks for users#
//   User.findOne({ email })
//     .then(user => {
//       if(user) return res.status(400).json({ msg: 'User already exists'});
//
//       const newUser = new User({
//         name,
//         email,
//         password
//       });
//
//       // creates password hash
//       bcrypt.genSalt(10, (e, salt) => {
//         bcrypt.hash(newUser.password, salt, (e, hash) => {
//           if(e) throw e;
//           newUser.password = hash;
//           newUser.save()
//           .then(user =>{
//
//             jwt.sign(
//               { id: user.id },
//               config.get('jwtSecret'),
//               {expiresIn: 1800},
//               (e, token) => {
//                 if(e) throw e;
//                 res.json({
//                   token,
//                   user: {
//                     id: user.id,
//                     name: user.name,
//                     email: user.email
//                   }
//                 });
//               }
//             )
//           });
//         })
//       })
//     })
// });
//
//
// module.exports = router;
