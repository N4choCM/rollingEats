const { request, response } = require("express");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");
  console.log(token + " jwt validator")

  // Checks if the token was sent.
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición.",
    });
  }

  // jwt.verify(token, process.env.SECRETORPRIVATEKEY, (error, decodedToken) => {
  //   if (error) {
  //     // Si hay un error al verificar el token, se devuelve una respuesta de error
  //     console.log('Token inválido:', error.message);
  //     return res.status(401).json({ error: 'Token inválido' });
  //   } else {
  //     // Si el token es válido, se devuelve una respuesta exitosa
  //     console.log('Token verificado:', decodedToken);
  //     return res.status(200).json({ mensaje: 'Token verificado' });
  //   }
  // });

  try {
    // JWT verification and uid extraction.
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // Data of the authenticated user extraction.
    const user = await User.findById(uid);

    // Checks if the User exists.
    if (!user) {
      return res.status(401).json({
        msg: "Token no válido; el usuario no existe.",
      });
    }

    // Checks if the User is active.
    if (!user.status) {
      return res.status(401).json({
        msg: "Token no válido; usuario inactivo.",
      });
    }

    req.user = user;

    next();
  } catch (e) {
    console.log(e);
    res.status(401).json({
      msg: "Token no válido.",
    });
  }
};

module.exports = {
  validateJWT,
};