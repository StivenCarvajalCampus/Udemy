import { Router } from 'express';
import { getUser } from "../models/User.js";
import passport from 'passport';
import '../strategies/discordStrategy.js'

const router_login = Router();

router_login.get('/auth/redirect',

  passport.authenticate('discord', {
    failureRedirect: 'http://localhost',
  }),
  (req, res) => {
    const user = req.user;
    res.redirect(`http://localhost:3300/dashboard?userId=${user.discordId}`);

  }
);

router_login.get("/user/:id", getUser)


export default router_login;
