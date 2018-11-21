'use strict';

const express = require('express');

const {User} = require('../models/user');
const {Tea} = require('../models/tea');


const router = express.Router();

// router.post('/teas', (req, res, next)=>{
//   const userId = req.user.id; 
  
//   User.findOne()
 
    
//   const newTea = { type, userId }; 
//   Promise.all()
//     .then(Tea.create(newTea)
//       .then(result => {
//         res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
//       })
//       .catch(err => {
//         next(err);
//       }));
// });
//middleware >> ensure logged in 
//findOne 
//update on the returned object 
//.save  >>> callback param error 

router.get('/', (req, res, next) => {

  User.find() .sort('name') .then(results => { res.json(results); }) 
    .catch(err => { next(err); }); });

/* ========== POST/CREATE AN ITEM ========== */
router.post('/', (req, res, next) => {
  let {username, password}= req.body;

  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        username,
        password: digest,
      };
      return User.create(newUser);
    })
    .then(result => {
      return res.status(201).location(`/api/users/${result.id}`).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The username already exists');
        err.status = 400;
      }
      next(err);
    });
});

module.exports = router;