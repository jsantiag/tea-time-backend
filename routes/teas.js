'use strict'; 

const express = require('express'); 
const mongoose = require('mongoose'); 
// const passport = require('passport'); 
const {Tea} = require('../models/tea.js');
const router = express.Router(); 
// const teas = require('../db/data');



//get all

router.get('/',(req, res, next)=>{
  Tea.find()
    .then(results => {
      res.status(200).json(results);
    });
});


//getbyid
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  // const userId = req.user.id;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    const err= new Error('the `id` is not valid my guy'); 
    err.status = 400; 
    return next(err); 
  }

  Tea.findOne({_id: id})
    .then(result => {
      if(result) {
        res.json(result); 
      }else{
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});

// router.post('/', (req, res, next)=>{
//   const{ type } = req.body; 
//   const userId = req.user.id; 

//   if (!type) {
//     const err = new Error('Missing tea type in req body'); 
//     err.status = 400; 
//     return next(err); 
//   }
  
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

module.exports=router; 