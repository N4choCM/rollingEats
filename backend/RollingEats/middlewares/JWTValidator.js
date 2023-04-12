const { request, response } = require("express");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header("x-token");

  // Checks if the token was sent.
  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición.",
    });
  }

  try {
    // JWT verification and UserId extraction.
    const { userId } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // Data of the authenticated user extraction.
    const user = await User.findById(userId);

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