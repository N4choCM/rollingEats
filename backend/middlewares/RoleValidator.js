const { request, response } = require("express");

const isUserAdmin = (req = request, res = response, next) => {
  if (!req.user) {
    // Checks if the token was not validated before.
    return res.status(500).json({
      msg: "Para validar el rol, es necesario haber validado el token antes.",
    });
  }

  const { role, name } = req.user;

  if (role !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${name} no es administrador.`,
    });
  }
  next();
};

module.exports = {
  isUserAdmin,
};