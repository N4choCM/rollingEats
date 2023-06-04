const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/FieldValidator");

const {
  getUsers,
  getUsersWithoutStatus,
  getUserById,
  register,
  editUserById,
  deleteUserById,
} = require("../controllers/UserController");

const {
  isRoleValid,
  isEmailUnique,
  isUserByIdUnique,
} = require("../helpers/DBValidator");

const { validateJWT } = require("../middlewares/JWTValidator");
const { isUserAdmin } = require("../middlewares/RoleValidator");

const router = Router();

router.get("/", [validateJWT, isUserAdmin], getUsers);

router.get("/users-no-status", [validateJWT], getUsersWithoutStatus);

router.get(
  "/:id",
  [
    validateJWT,
    check("id", "El ID no es válido.").isMongoId(),
    check("id").custom(isUserByIdUnique),
    validateFields,
  ],
  getUserById
);

router.post(
  "/",
  [
    check("name", "El nombre es obligatorio.").notEmpty(),
    check(
      "password",
      "La contraseña debe tener un mínimo de 6 caracteres."
    ).isLength({ min: 6 }),
    check("email", "No es un correo válido.").isEmail(),
    check("email").custom(isEmailUnique),
    check("role").custom(isRoleValid),
    validateFields,
  ],
  register
);

router.put(
  "/:id",
  [
    validateJWT,
    check("id", "El ID no es válido.").isMongoId(),
    check("id").custom(isUserByIdUnique),
    check("role").custom(isRoleValid),
    validateFields,
  ],
  editUserById
);

router.delete(
  "/:id",
  [
    validateJWT,
    isUserAdmin,
    check("id", "No es un ID válido.").isMongoId(),
    check("id").custom(isUserByIdUnique),
    validateFields,
  ],
  deleteUserById
);

module.exports = router;