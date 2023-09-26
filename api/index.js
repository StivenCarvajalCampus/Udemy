import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

// Obtener el puerto y el nombre de host desde las variables de entorno
let PORT = process.env.VITE_PORT_BACKEND;
let HOSTNAME = process.env.VITE_HOSTNAME;

app.listen(PORT, () => {
  console.log(`http://${HOSTNAME}:${PORT}`);
});
