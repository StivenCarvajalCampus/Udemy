import { Router } from 'express';
import passport from 'passport';
import '../strategies/discordStrategy.js'

const router_login = Router();

router_login.get('/login', passport.authenticate('discord'));

router_login.get('/auth/redirect',
  passport.authenticate('discord', {
    successRedirect: 'http://127.25.25.26:3300/dashboard',
    failureRedirect: 'http://127.25.25.26',
  })
);
export default router_login;
