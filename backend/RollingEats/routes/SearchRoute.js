const { Router } = require("express");
const { search } = require("../controllers/SearchController");
const { validateJWT } = require("../middlewares/JWTValidator");

const router = Router();

router.get("/:collection/:term", [validateJWT], search);

module.exports = router;
