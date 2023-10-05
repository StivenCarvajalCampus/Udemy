export function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next(); // El usuario está autenticado, permitir acceso
    }
    // El usuario no está autenticado, redirigir a la página de inicio de sesión u otra página
    res.redirect('/login'); // Cambia '/login' por la ruta de tu página de inicio de sesión
  }
  
  // ...
  
  // Agrega una ruta de logout protegida
  router.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout(); // Esto eliminará la sesión de usuario
    res.redirect('/'); // Redirige al usuario a la página principal o a donde prefieras
  });