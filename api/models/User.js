
import config from '../config.js';

async function getUserCollection() {
  const db = await config.conex(); // Obtener la instancia de la base de datos
  const res = db.collection('users');
  return res// Devolver la colección "users"
}
export async function getUser(req, res) { // Obtener la instancia de la base de datos
  const connect = await getUserCollection()
  const user = await connect.findOne({ discordId: req.params.id });
  console.log(user);
  res.json(user)
}

export default getUserCollection;
