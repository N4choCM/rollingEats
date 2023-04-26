import React, { useEffect, useState } from "react";
import { getMenuById, editMenuById } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "react-bootstrap/Modal";

const EditMenuModal = ({ show, handleClose, mid }) => {
	const MySwal = withReactContent(Swal);

	const [menu, setMenu] = useState(null);

	useEffect(() => {
		findMenuData();
	}, []);

	const findMenuData = async () => {
		const { menu } = await getMenuById(mid);
		setMenu(menu);
	};

	const handleChange = (e) => {
		setMenu({
			...menu,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		await editMenuById(mid, menu);
		MySwal.fire("Menú actualizado correctamente.", "", "success");
		handleClose();
	};

	return (
		<>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Editar Menú</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{menu ? (
						<form onSubmit={handleSubmit}>
							<label className="fw-bold">Nombre</label>
							<input
								type="text"
								className="form-control"
								value={menu.name}
								name="name"
								onChange={handleChange}
								maxLength={40}
							/>
							<label className="fw-bold">Descripción</label>
							<input
								type="text"
								className="form-control"
								value={menu.description}
								name="description"
								onChange={handleChange}
								maxLength={40}
							/>
							<label className="fw-bold">Precio</label>
							<input
								type="text"
								className="form-control"
								value={menu.price}
								name="price"
								onChange={handleChange}
								maxLength={40}
							/>
							<label className="fw-bold">Imagen</label>
							<input
								type="text"
								className="form-control"
								value={menu.img}
								name="img"
								onChange={handleChange}
							/>
							<div className="mb-3">
								<p>
									<span className="fw-bold">Categoría:</span>{" "}
									{menu.category}
								</p>
								<label className="fw-bold">
									Cambiar categoría
								</label>
								<select
									className="form-select"
									name="category"
									onChange={handleChange}
								>
									<option value="VEGAN">
										Elije una categoría
									</option>

									<option key="VEGAN" value="VEGAN">
										VEGAN
									</option>
									<option
										key="GLUTEN_FREE"
										value="GLUTEN_FREE"
									>
										GLUTEN_FREE
									</option>
									<option key="ITALIAN" value="ITALIAN">
										ITALIAN
									</option>
									<option key="MEAT" value="MEAT">
										MEAT
									</option>
									<option key="FISH" value="GLUTEN_FREE">
										GLUTEN_FREE
									</option>
									<option key="JAPANESE" value="JAPANESE">
										JAPANESE
									</option>
									<option key="FAST_FOOD" value="FAST_FOOD">
										FAST_FOOD
									</option>
									<option key="MEXICAN" value="MEXICAN">
										MEXICAN
									</option>
								</select>
							</div>
							<div className="d-grid mt-2">
								<button className="btn btn-warning">
									Actualizar
								</button>
							</div>
						</form>
					) : (
						<h3>Cargando...</h3>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditMenuModal;
