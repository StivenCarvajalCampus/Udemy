import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/login', passport.authenticate('discord'));
router.get(
  '/redirect',
  passport.authenticate('discord', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })
);

export default router;
