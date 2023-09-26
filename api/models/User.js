import config from '../config.js';

async function getUserCollection() {
  const db = await config.conex(); // Obtener la instancia de la base de datos
  return db.collection('users'); // Devolver la colección "users"
}

export default getUserCollection;
