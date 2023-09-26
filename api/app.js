import express from 'express';
import session from 'express-session';
import passport from 'passport';

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

// Routes
import indexRoutes from './routes/index.routes.js';
import authRoutes from './routes/auth.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js';

appExpress.use('/', indexRoutes);
appExpress.use('/auth', authRoutes);
appExpress.use('/', dashboardRoutes);

// Variables Globales
export default appExpress;
