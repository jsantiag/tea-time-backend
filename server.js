'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');

const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt'); 
const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');
const authRouter = require('./routes/auth');
const teasRouter = require('./routes/teas'); 
const usersRouter = require('./routes/users'); 

// const teas = require('./db/data'); 

const app = express();
app.use(express.json());

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

passport.use(localStrategy);
passport.use(jwtStrategy); 

app.use('/api/auth', authRouter);
app.use('/api/teas', teasRouter);
app.use('/api/users', usersRouter); 


// app.get('/api/teas', (req, res, next) => {
//   res.status(200).json(teas);
// });

// //app.get('/api/teas/:id')



function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
