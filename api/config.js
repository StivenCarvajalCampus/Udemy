import dotenv from 'dotenv';
import MongoClient from 'mongodb';

dotenv.config();
const { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } = process.env;
export default {
  
DISCORD_CLIENT_ID,
DISCORD_CLIENT_SECRET,
async conex() {
  try {
    const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.bzjkog5.mongodb.net/${process.env.ATLAS_DB}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    return client.db();
  } catch (error) {
    return { status: 500, message: error.message };
  }

}
};
