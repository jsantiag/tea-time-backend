'use strict';

const express = require('express');

const {User} = require('../models/user');


const router = express.Router();

router.post('/teas', (req, res, next)=>{

  let {_id, teaType} = req.body; 

  User.findOne({_id: _id})
    .then(user => {
      user.teas.push({teaType}); 
      // console.log(user.teas);
      user.save(function(err, user){
        if (err) return console.log(err); 
        console.log(user.teas + 'updated');
      });
    });
});

router.put('/teas', (req, res, next) => {
  let {
    _id,
    teaId,
    teaType,
    log,
    spilled,
    rating,
    timer
  } = req.body; 

  User.findOneAndUpdate({_id, 'teas._id': teaId},
    {$set:
       {
         'teas.$.log':log,
         'teas.$.timer':timer,
         'teas.$.spilled':spilled,
         'teas.$.rating':rating, 
         'teas.$.teaType': teaType
       }})
    .then(user => {
      user.save(function(err, user){
        if (err) return console.log(err); 
        console.log(user.teas + 'updated');
      });
    });
});


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