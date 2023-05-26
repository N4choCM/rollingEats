import React, { useEffect, useState } from "react";
import { createMenu } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "react-bootstrap/Modal";

const CreateMenuModal = ({ showCreate, handleCloseCreate }) => {
	const MySwal = withReactContent(Swal);

	const [menu, setMenu] = useState({});

	// useEffect(() => {
	// 	findMenuData();
	// }, []);

	// const findMenuData = async () => {
	// 	const { menu } = await getMenuById(mid);
	// 	setMenu(menu);
	// };

	const handleChange = (e) => {
		setMenu({
			...menu,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = document.querySelector("#menuForm");
		const formData = new FormData(form);
		const menuData = {};
		
		for (let [key, value] of formData.entries()) {
		  menuData[key] = value;
		}
		
		setMenu(menuData);
		await createMenu(menuData);
		MySwal.fire("Menú añadido correctamente.", "", "success");
		handleCloseCreate();
	  };

	return (
		<>
			<Modal show={showCreate} onHide={handleCloseCreate}>
				<Modal.Header closeButton>
					<Modal.Title>Añadir menú</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<form id="menuForm" onSubmit={handleSubmit}>
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
						<div className="mb-3">
							<label className="fw-bold">
								Categoría
							</label>
							<select
								className="form-select"
								name="category"
								onChange={handleChange}
							>
								<option value={menu.category}>
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
						
						<div className="d-grid mt-2">
							<button className="btn btn-success">
								Añadir
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CreateMenuModal;
