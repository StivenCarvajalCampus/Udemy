import passport from 'passport';
import { Strategy } from 'passport-discord';
import config from '../config.js';
import getUserCollection from '../models/User.js';
import dotenv from'dotenv';
dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.discordId);
});

passport.deserializeUser(async (id, done) => {
  try {
    const userCollection = await getUserCollection();
    const user = await userCollection.findOne({ discordId: id });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: 'http://localhost:5087/auth/redirect',
      scope: ['identify', 'guilds'],
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log('Perfil de usuario recibido:', profile);  
      try {
        const userCollection = await getUserCollection();
        const existingUser = await userCollection.findOne({ discordId: profile.id });

        if (existingUser) {
          done(null, existingUser);
        } else {
          const newUser = {
            discordId: profile.id,
            username: profile.username,
            avatar: profile.avatar,
            guilds: profile.guilds,
          };


          await userCollection.insertOne(newUser);
          console.log('New user created:', newUser);
          done(null, newUser);
        }
      } catch (error) {
        console.error(error);
        return done(error, null);
      }
    }
  )
);console.log(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_CLIENT_SECRET);

export default passport
