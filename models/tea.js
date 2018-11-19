'use strict'; 

const mongoose = require('mongoose'); 

const schema = new mongoose.Schema({
  type: {type: String, required: true},
  tempRec:{type: [Number]},
  steepTimeRec:{type: [Number]}
});

schema.set('toJSON', {
  virtuals: true, 
  transform: (doc, result) => {
    delete result._id; 
    delete result.__v; 
  }
}); 

const Tea = mongoose.model('Tea', schema); 
module.exports = {Tea};