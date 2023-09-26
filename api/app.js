import express from 'express';
import session from 'express-session';
import passport from 'passport';
import router_login from './routes/auth.routes.js';

// Configuraciones
const appExpress = express();
appExpress.use(express.json());

// Middlewares
appExpress.use(
  session({
    secret: 'some secret',
    saveUninitialized: false,
    resave: false,
  })
);
appExpress.use(passport.initialize());
appExpress.use(passport.session());


appExpress.use(router_login);
// Variables Globales
export default appExpress;
