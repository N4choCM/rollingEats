const { response, request } = require("express");
const Order = require("../models/Order");

//! Remove PutOrder. It doesn't make sense!
// Finds all the orders paginated.
const getOrders = async (req = request, res = response) => {
	// const { from = 0, to = 5 } = req.query;
	const query = { status: true };

	const [total, orders] = await Promise.all([
		Order.countDocuments(query),
		Order.find(query)
		// .skip(Number(from)).limit(Number(to)),
	]);

	res.json({
		total,
		orders,
	});
};

// Finds all the orders paginated.
const getOrdersByUser = async (req = request, res = response) => {
	const { user } = req.params;
	const orders = await Order.find({user: user, status: true})
	res.json({
		orders,
	});
};

// Gets an order by its ID.
const getOrderById = async (req = request, res = response) => {
	const { id } = req.params;
	const order = await Order.findById(id);
	res.json({
		order,
	});
};

// Creates an Order.
const createOrder = async (req = request, res = response) => {
	const { date, delivered, menu, user, status } = req.body;

	// Generation of the data to be stored in the DB.
	const data = {
		menu,
		user,
		date,
		delivered,
		status,
	};

	const order = new Order(data);
	await order.save();
	res.status(201).json({
		order,
		message: "¡Pedido creado con éxito!",
	});
};

// Updates an Order.
const editOrderById = async (req, res) => {
	const { id } = req.params;
	const { date, delivered, status } = req.body;
  const user = req.user._id;
  const menu = req.menu._id;

	let data = {
    user,
		date,
    menu,
		delivered,
		status,
	};

	const order = await Order.findByIdAndUpdate(id, data, { new: true });

	res.status(201).json({
		order,
		msg: "Pedido actualizado correctamente.",
	});
};

// Deletes an Order.
const deleteOrderById = async (req, res) => {
	const { id } = req.params;

	const deletedOrder = await Order.findByIdAndUpdate(
		id,
		{ status: false },
		{ new: true }
	);

	res.json({
		msg: `El pedido con ID ${deletedOrder.id} ha sido inactivado correctamente.`,
	});
};

module.exports = {
	getOrders,
	getOrdersByUser,
	getOrderById,
	createOrder,
	editOrderById,
	deleteOrderById,
};