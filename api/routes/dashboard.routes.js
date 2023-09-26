import express from 'express';

const app = express();

// Rutas
app.get('/dashboard', (req, res) => {
  res.send('This is the dashboard.'); // Enviar una respuesta de texto plano en lugar de renderizar una vista
});

// Resto de la configuración y rutas

export default app;
