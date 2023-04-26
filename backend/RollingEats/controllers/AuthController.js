const { response, request } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { generateJWT } = require("../helpers/JWTGenerator");

const login = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Checks if the email exists.
    if (!user) {
      return res.status(400).json({
        msg: "Correo electrónico o contraseña incorrectos.",
      });
    }

    // Checks if the user is enabled.
    if (!user.status) {
      return res.status(400).json({
        msg: "Correo electrónico o contraseña incorrectos.",
      });
    }

    // Checks the password.
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Correo electrónico o contraseña incorrectos.",
      });
    }

    // Generates the token.
    const token = await generateJWT(user._id);

    res.json({
      msg: "¡Login OK!",
      user,
      token,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      msg: "Oops, ha ocurrido un error inesperado. Si el problema persiste, póngase en contacto con el administrador (admin@rolling-eats.com).",
    });
  }
};

module.exports = {
  login,
};