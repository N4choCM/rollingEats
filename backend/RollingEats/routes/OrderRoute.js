const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/FieldValidator");
const { validateJWT } = require("../middlewares/JWTValidator");
const { isUserAdmin } = require("../middlewares/RoleValidator");
const { isOrderByIdUnique } = require("../helpers/DBValidator");

const {
	getOrders,
	getOrdersByUser,
	getOrderById,
	createOrder,
	editOrderById,
	deleteOrderById,
} = require("../controllers/OrderController");

const router = Router();

router.get("/", [validateJWT, isUserAdmin], getOrders);

router.get(
	"/:id",
	[
		validateJWT,
		check("id", "El ID no es válido.").isMongoId(),
		check("id").custom(isOrderByIdUnique),
		validateFields,
	],
	getOrderById
);

router.get(
	"/users/:user",
	[
		validateJWT,
		check("user", "El ID no es válido.").isMongoId(),
		validateFields,
	],
	getOrdersByUser
);

router.post("/", [validateJWT, validateFields], createOrder);

router.put(
	"/:id",
	[
		validateJWT,
		isUserAdmin,
		check("id", "El ID no es válido.").isMongoId(),
		check("id").custom(isOrderByIdUnique),
		validateFields,
	],
	editOrderById
);

router.delete(
	"/:id",
	[
		validateJWT,
		isUserAdmin,
		check("id", "El ID no es válido.").isMongoId(),
		check("id").custom(isOrderByIdUnique),
		validateFields,
	],
	deleteOrderById
);

module.exports = router;
