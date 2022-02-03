const express = require('express');

const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const helpers = require('./helpers');

const apiRouter = require('./routes/api');
const authJwtRouter = require('./routes/authJwt');

const errorHandlers = require('./handlers/errorHandlers');

const { isValidToken } = require('./controllers/authJwtController ');

require('dotenv').config({ path: '.env' });
// create our Express app
const app = express();
// serves up static files from the public folder. Anything in public/ will just be served up as the file it is

// Takes the raw requests and turns them into usable properties on req.body

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.admin = req.admin || null;
  res.locals.currentPath = req.path;
  next();
});


//  API Routes

app.use(
  '/api',
  cors({
    origin: true,
    credentials: true,
  }),
  authJwtRouter
);

// app.use("/api", cors(), isValidToken, apiRouter);

app.use(
  '/api',
  cors({
    origin: true,
    credentials: true,
  }),
  isValidToken,
  apiRouter
);


// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app;
