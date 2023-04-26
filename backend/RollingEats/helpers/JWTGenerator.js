const jwt = require("jsonwebtoken");

const generateJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = {uid};
    jwt.sign(
      payload,
      process.env.SECRETORPRIVATEKEY,
      {
        expiresIn: "31536000s",
      },
      (e, token) => {
        console.log(token + " JWTGenerator")
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