//defTeaList = default tea list 
'use strict'; 

const teas = [
  {
    type:'White', 
    tempRec:[175,185],
    steepTimeRec:[1,3],
  },

  {
    type:'Green',
    tempRec:[180,185], 
    steepTimeRec:[3]
  }, 

  {
    type:'Black',
    tempRec:[206],
    steepTimeRec:[3,5]
  },

  {
    type:'Darjeeling',
    tempRec:[185],
    steepTimeRec:[3]
  },

  {
    type:'Oolong', 
    tempRec:[185,206],
    steepTimeRec:[3,5]
  },

  {
    type:'Tisane', 
    tempRec:[206], 
    steepTimeRec:[5,7]
  },

  {
    type:'Raw Pu-erh', 
    tempRec:[195],
    steepTimeRec:[3,5]
  },

  {
    type:'Half & Full Baked Pu-erh', 
    tempRec:[206],
    steepTimeRec:[3,5]
  }
]; 

module.exports = {teas};