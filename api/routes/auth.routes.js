import { Router } from 'express';
import { getUser } from "../models/User.js";
import passport from 'passport';
import '../strategies/discordStrategy.js'

const router_login = Router();

router_login.get('/login',isNotAuthorized, passport.authenticate('discord'));
router_login.get('/logout', (req, res) => {
  req.logout({}, err => console.log(err));
  res.redirect('/');
})

router_login.get('/auth/redirect',

  passport.authenticate('discord', {
    failureRedirect: 'http://127.25.25.26',
  }),
  (req, res) => {
    const user = req.user;
    res.redirect(`http://127.25.25.26:3300/dashboard?userId=${user.discordId}`);

  }
);

router_login.get("/user/:id", getUser)


export default router_login;
