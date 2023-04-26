const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/FieldValidator");
const {
	getMenus,
	getMenuById,
	createMenu,
	editMenu,
	deleteMenuById,
} = require("../controllers/MenuController");
const { isMenuByIdUnique } = require("../helpers/DBValidator");
const { validateJWT } = require("../middlewares/JWTValidator");
const { isUserAdmin } = require("../middlewares/RoleValidator");

const router = Router();

router.get("/", getMenus);

router.get(
	"/:id",
	[
		check("id", "El ID no es válido").isMongoId(),
		check("id").custom(isMenuByIdUnique),
		validateFields,
	],
	getMenuById
);

router.post(
	"/",
	[
		isUserAdmin,
		check("name", "El nombre es obligatorio.").notEmpty(),
		check("description", "La descripción es obligatoria.").notEmpty(),
		check("category", "La categoría es obligatoria.").notEmpty(),
		check("img", "La imagen es obligatoria.").notEmpty(),
		check("price", "El precio es obligatorio.").notEmpty(),
		check("price", "El precio debe ser numérico.").isNumeric(),
		validateFields,
	],
	createMenu
);

router.put(
	"/:id",
	[
		isUserAdmin,
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(isMenuByIdUnique),
		validateFields,
	],
	editMenu
);

router.delete(
	"/:id",
	[
		isUserAdmin,
		check("id", "No es un ID válido").isMongoId(),
		check("id").custom(isMenuByIdUnique),
		validateFields,
	],
	deleteMenuById
);

module.exports = router;
