import express from 'express';
import session from 'express-session';
import passport from 'passport';
import router_login from './routes/auth.routes.js';
import './strategies/discordStrategy.js';
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

// Variables Globales
appExpress.use((req, res, next) => {
  appExpress.locals.user = req.user;
  next();
})

appExpress.use(router_login);

export default appExpress;
