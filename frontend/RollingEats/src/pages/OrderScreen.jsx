import React, { useEffect, useState } from "react";
import OrderTableRows from "../components/OrderTableRows";

import { getOrdersByUser } from "../helpers/OrderApi";

import "../css/order.css";

const OrderScreen = ({ user }) => {
	const { uid } = user;

	const [orders, setOrders] = useState([]);

	const [totalOrders, setTotalOrders] = useState(0);

	useEffect(() => {
		findOrdersByUser();
	}, []);

	const findOrdersByUser = async () => {
		const { orders, total } = await getOrdersByUser(uid);
		setTotalOrders(total);
		setOrders(orders);
	};

	return (
		<>
    <br /><br /><br /><br />
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
                <th scope="col">ID</th>
                <th scope="col">Fecha</th>
                <th scope="col">Menú</th>
                <th scope="col">¿En reparto?</th>
                <th scope="col">Precio</th>
                <th scope="col">Cancelar</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderTableRows orderProp={order} />
              ))}
            </tbody>
          </table>

        </div>
			)}
		</>
	);
};

export default OrderScreen;
