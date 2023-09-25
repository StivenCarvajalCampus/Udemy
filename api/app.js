import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; 
import session from 'express-session';
import passport from 'passport';
import { createEngine } from 'express-react-views';

import './strategies/discordStrategy.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Configuraciones
const appExpress = express();
appExpress.use(express.json());
appExpress.set('views', path.join(__dirname, 'src', 'views'));
appExpress.set('view engine', 'jsx'); // Usar el motor de vistas "jsx"

// Middleware para compilar JSX
appExpress.engine('jsx', createEngine());

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
