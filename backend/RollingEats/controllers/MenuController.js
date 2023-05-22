const { response, request } = require("express");
const Menu = require("../models/Menu");

// Finds all the menus paginated.
const getMenus = async (req = request, res = response) => {
	const { from, to } = req.query;
	const query = { status: true };

	const [total, menus] = await Promise.all([
		Menu.countDocuments(query),
		Menu.find(query).skip(Number(from)).limit(Number(to)),
	]);

	res.json({
		total,
		menus,
	});
};

// Finds all the menus paginated.
const getMenusWithoutStatus = async (req = request, res = response) => {
	const [total, menus] = await Promise.all([
		Menu.countDocuments(),
		Menu.find(),
	]);
	res.json({
		total,
		menus,
	});
};

// Gets a menu by its ID.
const getMenuById = async (req = request, res = response) => {
	const { id } = req.params;
	const menu = await Menu.findById(id);
	res.json({
		menu,
	});
};

// Creates a Menu
const createMenu = async (req, res = response) => {
	const { description, category, price, img, status } = req.body;
	const name = req.body.name.toUpperCase();

	const menuDB = await Menu.findOne({ name });

	// Validates if the menu exists in the DB.
	if (menuDB) {
		return res.status(400).json({
			msg: `El menú ${menuDB.nombre} ya existe.`,
		});
	}

	// Generation of the data to be stored in the DB.
	const data = {
		name,
		description,
		category,
		price,
		img,
		status,
	};

	const menu = new Menu(data);
	await menu.save();
	res.status(201).json({
		menu,
		msg: "¡Menú creado con éxito!",
	});
};

// Updates a Menu
const editMenu = async (req, res) => {
	const { id } = req.params;
	const { description, category, price, img, status } = req.body;

	let data = {
		description,
		category,
		price,
		img,
		status,
	};

	if (req.body.name) {
		data.name = req.body.name.toUpperCase();
	}

	const menu = await Menu.findByIdAndUpdate(id, data, { new: true });

	res.status(201).json({
		menu,
		msg: "Menú actualizado correctamente.",
	});
};

// Deletes a Menu.
const deleteMenuById = async (req, res) => {
	const { id } = req.params;

	const menuData = req.menu;
  
	// Changes the status to false.
	const menu = await Menu.findById(id);
  
	if (!menu.status) {
	  return res.json({
		message: "El menú ha sido inactivado correctamente.",
	  });
	}
  
	const deletedMenu = await Menu.findByIdAndUpdate(
	  id,
	  { status: false },
	  { new: true }
	);
  
	res.json({
	  message: "Menú inactivado correctamente.",
	  deletedMenu,
	  menuData,
	});
};

module.exports = {
	getMenus,
	getMenusWithoutStatus,
	getMenuById,
	createMenu,
	editMenu,
	deleteMenuById,
};
