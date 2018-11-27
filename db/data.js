//defTeaList = default tea list 
'use strict'; 

exports.teas = [
  {
    'teaId': '000000000000000000000000',
    'teaType':'White', 
    'tempRec':[175,185],
    'steepTimeRec':[1,3],
  },

  {
    'teaId': '000000000000000000000001',
    'teaType':'Green',
    'tempRec':[180,185], 
    'steepTimeRec':3
  }, 

  {
    'teaId': '000000000000000000000002',
    'teaType':'Black',
    'tempRec':[206],
    'steepTimeRec':[3,5]
  },

  {
    'teaId': '000000000000000000000003',
    'teaType':'Darjeeling',
    'tempRec':[185],
    'steepTimeRec':[3]
  },

  {
    'teaId': '000000000000000000000004',
    'teaType':'Oolong', 
    'tempRec':[185,206],
    'steepTimeRec':[3,5]
  },

  {
    'teaId': '000000000000000000000005',
    'teaType':'Tisane', 
    'tempRec':[206], 
    'steepTimeRec':[5,7]
  },

  {
    'teaId': '000000000000000000000006',
    'teaType':'Raw Pu-erh', 
    'tempRec':195,
    'steepTimeRec':[3,5]
  },

  {
    'teaId': '000000000000000000000007',
    'teaType':'Half & Full Baked Pu-erh', 
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
      'teaId': '000000000000000000000000',
      'teaType':'White',
      'timer': 4,
      'log':'a little bitter', 
      'spilled': true,
      'rating': 2, 
      'date':''
    }, {
      'teaId':'000000000000000000000004',
      'teaType':'Oolong',
      'timer': 5, 
      'log':'a lil dull',
      'spilled': false,
      'rating': 3, 
      'date':''
    }
    ]
  }];




