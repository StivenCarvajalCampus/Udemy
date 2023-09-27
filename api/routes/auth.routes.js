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
router_login.get('/auth/redirect', (req, res, next) => {
  passport.authenticate('discord', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (!user) {
      return res.redirect('/'); // Redirige en caso de que no haya un usuario válido
    }

    // Imprime los datos del usuario en la consola
    console.log('Datos del usuario autenticado:', user);

    // Continúa con la redirección
    return res.redirect('/dashboard');
  })(req, res, next);
});

export default router_login;
