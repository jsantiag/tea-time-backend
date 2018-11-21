//defTeaList = default tea list 
'use strict'; 

exports.teas = [
  {
    '_id': '000000000000000000000000',
    'type':'White', 
    'tempRec':[175,185],
    'steepTimeRec':[1,3],
  },

  {
    '_id': '000000000000000000000001',
    'type':'Green',
    'tempRec':[180,185], 
    'steepTimeRec':3
  }, 

  {
    '_id': '000000000000000000000002',
    'type':'Black',
    'tempRec':[206],
    'steepTimeRec':[3,5]
  },

  {
    '_id': '000000000000000000000003',
    'type':'Darjeeling',
    'tempRec':[185],
    'steepTimeRec':[3]
  },

  {
    '_id': '000000000000000000000004',
    'type':'Oolong', 
    'tempRec':[185,206],
    'steepTimeRec':[3,5]
  },

  {
    '_id': '000000000000000000000005',
    'type':'Tisane', 
    'tempRec':[206], 
    'steepTimeRec':[5,7]
  },

  {
    '_id': '000000000000000000000006',
    'type':'Raw Pu-erh', 
    'tempRec':195,
    'steepTimeRec':[3,5]
  },

  {
    '_id': '000000000000000000000007',
    'type':'Half & Full Baked Pu-erh', 
    'tempRec': 206,
    'steepTimeRec':[3,5]
  }
]; 

exports.users = [
  {
    'username':'jsantiag', 
    'password': 'gypsyqueen111',
    'firstName':'jocelyn', 
    'lastName':'santiago',
    'teas':[{
      'type': {'_id': '000000000000000000000000'},
      'timer': 4,
      'log':'a little bitter', 
      'spilled': true,
      'rating': 2, 
      'date':''
    }
    ]
  }];




