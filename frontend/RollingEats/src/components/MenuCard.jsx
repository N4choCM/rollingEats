import React, { useState, useEffect } from "react";
import "../css/cards.css";
import { createOrder } from "../helpers/OrderApi";

const MenuCard = ({ menuProp, uid }) => {
	const [showMessage, setShowMessage] = useState(false);
	const [messageDuration, setMessageDuration] = useState(3000);

	const handleCreateOrder = async (e, menuName, userId) => {
		e.preventDefault();

		const data = {
			user: userId,
			menu: menuName,
		};
		const resp = await createOrder(data);

		setShowMessage(true);

		setTimeout(() => {
			setShowMessage(false);
		}, messageDuration);
	};

	return (
		<div className="col ">
			<div className="card h-100 text-dark ">
				<div>
					<img
						src={menuProp.img}
						className="card-img-top"
						alt={menuProp.name}
					/>
				</div>
				<div className="card-body d-flex flex-column justify-content-between mt-2">
					<div>
						<h5 className="card-title text-center">
							{menuProp.name}
						</h5>
					</div>
					<div>
						<p className="card-text">{menuProp.description}</p>
					</div>
					<div className="mb-1 mt-2 text-end">
						<p className="badge rounded-pill text-bg-rolling-eats fw-bold">
							{menuProp.price} €
						</p>
					</div>

					<button
						className="btn btn-card"
						onClick={(e) =>
							handleCreateOrder(e, menuProp.name, uid)
						}
					>
						Añadir menú
					</button>
          {showMessage && (
  <div className="alert alert-success mt-2 text-center" role="alert">
    ¡{menuProp.name} recibido!
  </div>
)}
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
