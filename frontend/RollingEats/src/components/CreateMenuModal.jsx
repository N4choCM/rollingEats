import React, { useEffect, useState } from "react";
import { createMenu } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "react-bootstrap/Modal";

const CreateMenuModal = ({ showCreate, handleCloseCreate }) => {
	const MySwal = withReactContent(Swal);

	const [nameInput, setNameInput] = useState("");
	const [descriptionInput, setDescriptionInput] = useState("");
	const [categoryInput, setCategoryInput] = useState("");
	const [priceInput, setPriceInput] = useState("");
	const [imgInput, setImgInput] = useState("");

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
		const data = {
			name: nameInput,
		  	description: descriptionInput,
		  	category: categoryInput,
			price: priceInput,
			img: imgInput,
			status: true
		};
		const resp = await createMenu(data);
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
							value={nameInput}
							name="name"
							onChange={(e) => setNameInput(e.target.value)}
							maxLength={40}
						/>
						<label className="fw-bold">Descripción</label>
						<input
							type="text"
							className="form-control"
							value={descriptionInput}
							name="description"
							onChange={(e) => setDescriptionInput(e.target.value)}
							maxLength={40}
						/>
						<div className="mb-3">
							<label className="fw-bold">
								Categoría
							</label>
							<select
								className="form-select"
								name="category"
								onChange={(e) => setCategoryInput(e.target.value)}
								>
								<option value={categoryInput}>
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
							value={priceInput}
							name="price"
							onChange={(e) => setPriceInput(e.target.value)}
							maxLength={40}
						/>
						<label className="fw-bold">Imagen</label>
						<input
							type="text"
							className="form-control"
							value={imgInput}
							name="img"
							onChange={(e) => setImgInput(e.target.value)}
						/>
						
						<div className="d-grid mt-2">
							<button className="btn btn-success">
								Añadir menú
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default CreateMenuModal;
