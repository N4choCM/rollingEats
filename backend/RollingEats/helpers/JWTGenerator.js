const jwt = require("jsonwebtoken");

const generateJWT = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = { userId };
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "4h",
      },
      (e, token) => {
        if (e) {
          console.log(e);
          reject("No se pudo generar el token.");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generateJWT,
};