const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/FieldValidator");
const {validateJWT} = require("../middlewares/JWTValidator");
const { login } = require("../controllers/AuthController");

const router = Router();

router.post(
  "/login",
  [
    validateJWT,
    check("email", "La dirección de correo electrónico introducida no es válida.").isEmail(),
    check("password", "La contraseña es obligatoria.").notEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;