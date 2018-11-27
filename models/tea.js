'use strict'; 

const mongoose = require('mongoose'); 

const TeaSchema = mongoose.Schema({
  teaId: {type:mongoose.Schema.Types.ObjectId},
  teaType: {type: String, required: true},
  tempRec:{type: [Number]},
  steepTimeRec:{type: [Number]}
});

TeaSchema.set('toJSON', {
  virtuals: true, 
  transform: (doc, result) => {
    delete result._id; 
    delete result.__v; 
  }
}); 

const Tea = mongoose.model('Tea', TeaSchema); 
module.exports = {Tea};