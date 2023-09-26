import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createEngine } from 'express-react-views';

const app = express();

// Obtener la ruta al directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar el motor de vistas para JSX
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

// Rutas
app.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Esto renderizará la vista "dashboard.jsx"
});

// Resto de la configuración y rutas

export default app;
