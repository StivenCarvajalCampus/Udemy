import express from 'express';
import path from 'path';
import expressReactViews from 'express-react-views'; // Importa el módulo sin usar require

const app = express();

// Obtiene el directorio actual usando import.meta.url
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Configuración de vistas
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'jsx'); // Usar el motor de vistas "jsx"

// Middleware para compilar JSX
app.engine('jsx', expressReactViews.createEngine());

// Rutas
app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Resto de la configuración y rutas

export default app;
