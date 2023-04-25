import React, { useEffect, useState } from "react";
import OrderTableRows from "../components/OrderTableRows";

import { getOrdersByUser } from "../helpers/OrderApi";

import "../css/order.css";

const OrderScreen = ({ user }) => {
	const { uid } = user;

	const [orders, setOrders] = useState(null);

	const [totalOrders, setTotalOrders] = useState(0);

	useEffect(() => {
		setOrders(null);
		findOrdersByUser();
	}, []);

	const findOrdersByUser = async () => {
		const { orders, total } = await getOrdersByUser(uid);
		setTotalOrders(total);
		setOrders(orders);
	};

	return (
		<>
			{!orders ? (
				<div className="row">
					<div className="col">
						<h3 className="text-white">Cargando...</h3> //! Spinner?
					</div>
				</div>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">ID</th>
							<th scope="col">Fecha</th>
							<th scope="col">Menú</th>
							<th scope="col">¿En reparto?</th>
							<th scope="col">Precio</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<OrderTableRows orderProp={order} />
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default OrderScreen;
