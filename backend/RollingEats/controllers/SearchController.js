const { response, request } = require("express");
const User = require("../models/User");
const Menu = require("../models/Menu");
const Order = require("../models/Order");
const validCollections = ["users", "menus", "orders"];

// Searches Users
const searchUsers = async (term, res = response) => {
	const regex = new RegExp(term, "i");

	const users = await User.find({
		$or: [{ name: regex }, { email: regex }],
		$and: [{ status: true }],
	});

	res.json({
		results: users,
	});
};

// Searches menus.
const searchMenus = async (term, res = response) => {
	const regex = new RegExp(term, "i");

	const menus = await Menu.find({
		$or: [
			{ name: regex },
			{ description: regex },
		],
		$and: [{ status: true }],
	});

	res.json({
		results: menus,
	});
};

// Searches orders.
const searchOrders = async (term, res = response) => {
	const regex = new RegExp(term, "i");

	const orders = await Order.find({
		$or: [{ date: regex }],
		$and: [{ status: true }],
	});

	res.json({
		results: orders,
	});
};

// Main search function
const search = (req = request, res = response) => {
	const { collection, term } = req.params;

	// Collection validation
	if (!validCollections.includes(collection)) {
		return res.status(400).json({
			msg: `Las colecciones permitidas son: ${validCollections}.`,
		});
	}

	// Once a collection is set, let's search by term.
	switch (collection) {
		case "users":
			searchUsers(term, res);
			break;
		case "menus":
			searchMenus(term, res);
			break;
		case "orders":
			searchOrders(term, res);
			break;
		default:
			res.status(500).json({
				msg: "Oops, se produjo un error inesperado al realizar la búsqueda. Si el problema persiste, póngaste en contacto con el administrador (admin@rolling-eats.com).",
			});
			break;
	}
};

module.exports = {
	search,
};
