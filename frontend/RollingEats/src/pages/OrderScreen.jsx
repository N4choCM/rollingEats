import React, { useEffect, useState } from "react";
import OrderTableRows from "../components/OrderTableRows";
import { getMenus } from "../helpers/MenuApi";
import { getOrdersByUser } from "../helpers/OrderApi";

import "../css/order.css";

const OrderScreen = ({ user }) => {
	const { uid } = user;

	const [orders, setOrders] = useState([]);
	const [menus, setMenus] = useState([]);
	const [totalOrders, setTotalOrders] = useState(0);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		findOrdersByUser();
		const fetchMenus = async () => {
			const menus = await getMenus();
			setMenus(menus.menus);
			findPriceByUser(menus.menus);
		};
		fetchMenus();
	}, []);

	const findPriceByUser = (menus) => {
		const totalPrice = menus
			.filter((menu) => menu.user === uid)
			.map((menu) => menu.price)
			.reduce((acc, price) => acc + price, 0);
		setPrice(totalPrice);
	};

	const findOrdersByUser = async () => {
		const { orders, total } = await getOrdersByUser(uid);
		setTotalOrders(total);
		setOrders(orders);
	};

	return (
		<>
			<br />
			<br />
			<br />
			<br />
			{orders.length == 0 ? (
				<div className="row">
					<div className="col">
						<h3 className="text-white">Cargando...</h3> //! Spinner?
					</div>
				</div>
			) : (
				<div className="m-5 table-responsive">
					<table className="table table-hover table-striped table-bordered">
						<thead className="bg-thead">
							<tr>
								<th scope="col" className="text-center">
									ID
								</th>
								<th scope="col" className="text-center">
									Fecha
								</th>
								<th scope="col" className="text-center">
									Menú
								</th>
								<th scope="col" className="text-center">
									¿En reparto?
								</th>
								<th scope="col" className="text-center">
									Precio
								</th>
								<th scope="col" className="text-center">
									Cancelar
								</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<OrderTableRows orderProp={order} />
							))}
						</tbody>
						<tfoot>
							<tr>
								<th className="no-border text-center"></th>
								<th className="no-border text-center"></th>
								<th className="no-border text-center"></th>
								<th className="text-center">Total: </th>
								<th className="text-center">{price} €</th>
								<th className="no-border text-center"></th>
							</tr>
						</tfoot>
					</table>
					<button className="btn btn-pay">Tramitar pedido</button>
				</div>
			)}
		</>
	);
};

export default OrderScreen;
