
'use strict';
const {User} = require('./models/user'); 
const { dbConnect } = require('./db-mongoose');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const { DATABASE_URL } = require('./config');

dbConnect()
  .then(()=>{

    User.hashPassword('gypsyqueen111')
      .then(digest => {
        console.log(digest);
        const update = {
          password: digest,
        };
        return User.findOneAndUpdate({username:'jsantiag'}, update, {new:true});
      })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  });
