import React, { useState, useEffect } from "react";
import { getMenusWithoutStatus, deleteMenuById } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditMenuModal from "../components/EditMenuModal";

const AdminMenuScreen = () => {
	const [menus, setMenus] = useState([]);

	const MySwal = withReactContent(Swal);

	// Modal management
	const [show, setShow] = useState(false);
	const [mid, setMid] = useState(null);

	const handleClose = () => {
		setMid(null);
		setShow(false);
		fetchData();
	};

	const handleShow = (id) => {
		setMid(id);
		setShow(true);
	};

	const blockMenu = async (id) => {
		MySwal.fire({
			title: `¿Está seguro de que quiere inactivar el menú con ID ${id}?`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "Sí",
			denyButtonText: `No`,
		}).then((result) => {
			if (result.isConfirmed) {
				deleteMenuById(id).then((result) => {
					console.log(result);
					fetchData();
					MySwal.fire("", `${result.msg}`, "success");
				});
			} else if (result.isDenied) {
				MySwal.fire("El menú no pudo ser inactivado.", "", "info");
			}
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await getMenusWithoutStatus();
			setMenus(response.menus);
		} catch (e) {
			console.error(e);
		}
	};
	return (
		<>
			<br />
			<br />
			<br />
			<div className="m-5 table-responsive">
				<table className="table table-hover table-striped table-bordered">
					<thead className="bg-thead">
						<tr>
							<th scope="col" className="text-center">
								ID
							</th>
							<th scope="col" className="text-center">
								Nombre
							</th>
							<th scope="col" className="text-center">
								Categoria
							</th>
							<th scope="col" className="text-center">
								Precio
							</th>
							<th scope="col" className="text-center">
								Estado
							</th>
							<th scope="col" className="text-center">
								Acciones
							</th>
						</tr>
					</thead>
					<tbody>
						{menus.map((menu) => (
							<tr key={menu.mid}>
								<td className="text-center">{menu.id}</td>
								<td className="text-center">{menu.name}</td>
								<td className="text-center">
									{menu.category}
								</td>
								<td className="text-center">{menu.price}</td>
								<td className="text-center">{menu.status ? "Activado" : "Desactivado"}</td>
								<td className="text-center">
									<button
										className="btn"
										onClick={() => blockMenu(menu.id)}
									>
										<i
											className="fa fa-trash text-danger"
											aria-hidden="true"
										></i>
									</button>
									<button
										className="btn"
										onClick={() => handleShow(menu.id)}
									>
										<i
											className="fa fa-pencil text-warning"
											aria-hidden="true"
										></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{show && (
				<EditMenuModal
					show={show}
					handleClose={handleClose}
					mid={mid}
				/>
			)}
		</>
	);
};

export default AdminMenuScreen;
