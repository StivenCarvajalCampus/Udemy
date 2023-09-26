
import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';

dotenv.config();
const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env;
export default {
  
DISCORD_CLIENT_ID,
DISCORD_CLIENT_SECRET,
async conex() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.bzjkog5.mongodb.net/${process.env.ATLAS_DB}`;
    const client = await MongoClient.connect(uri);
    console.log("Conexión exitosa a MongoDB");
    return client.db();
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error;
  }
}

};
