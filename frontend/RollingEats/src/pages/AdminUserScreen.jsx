import React, { useState, useEffect } from "react";
import { getUsersWithoutStatus, deleteUserById, getUserById, editUserById } from "../helpers/UserApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditUserModal from "../components/EditUserModal";

const AdminUserScreen = () => {
	const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const MySwal = withReactContent(Swal);

  // Modal management
  const [show, setShow] = useState(false);
  const [uid, setUid] = useState(null);

  const handleClose = () => {
    setUid(null);
    setShow(false);
    fetchData();
  };

  const handleShow = (id) => {
    setUid(id);
    setShow(true);
  };

  const changeStatus = async (id) => {
    try {
      const response = await getUserById(id);
      const user = response.user;
      if(user.role === "ADMIN_ROLE"){
        MySwal.fire("No se puede bloquear a un administrador", "", "info");
        return;
      }else{
        user.status = !user.status;
        const result = await editUserById(id, user);
        fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Block Order
  const blockUser = async (id) => {
    const response = await getUserById(id);
    if(response.user.role === "ADMIN_ROLE"){
      MySwal.fire("No se puede bloquear a un administrador", "", "info");
      return;
    }else{
      MySwal.fire({
        title: `¿Está seguro de que quiere inactivar el usuario con ID ${id}?`,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sí",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteUserById(id).then((result) => {
            fetchData();
            console.log(result)
            MySwal.fire("", `${result.message}`, "success");
          });
        } else if (result.isDenied) {
          MySwal.fire("El usuario no pudo ser inactivado", "", "info");
        }
      });
    }
  };


	useEffect(() => {
    fetchData();
	}, []);
  
  const fetchData = async () => {
    try {
      const response = await getUsersWithoutStatus();
      setUsers(response.users);
      setLoading(false);
    } catch (e) {
      console.error(error);
    }
  };

	return (
    <>
    <br /><br /><br />
    {loading == true ? (
				<>
				<div className="spinner-border custom-spinner" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
				</>
			) : (
		<div className="m-5 table-responsive">
			<table className="table table-hover table-striped table-bordered">
				<thead className="bg-thead">
					<tr>
						<th scope="col" className="text-center">ID</th>
						<th scope="col" className="text-center">Nombre</th>
						<th scope="col" className="text-center">Email</th>
						<th scope="col" className="text-center">Role</th>
            <th scope="col" className="text-center">Estado</th>
						<th scope="col" className="text-center">Acciones</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.uid}>
							<td className="text-center">{user.uid}</td>
							<td className="text-center">{user.name}</td>
							<td className="text-center">{user.email}</td>
							<td className="text-center">{user.role}</td>
              <td className="text-center"><button className={user.status ? "btn btn-green" : "btn btn-red"} onClick={() => changeStatus(user.uid)}>{user.status ? "Activo" : "Inactivo"}</button></td>
							<td className="text-center" >
								<button className="btn" onClick={() => blockUser(user.uid)}>
									<i className="fa fa-trash text-danger" aria-hidden="true"></i>
								</button>
                <button className="btn" onClick={() => handleShow(user.uid)}>
									<i className="fa fa-pencil text-warning" aria-hidden="true"></i>
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
      )}
    {show && (
        <EditUserModal show={show} handleClose={handleClose} uid={uid} />
      )}
    </>
	);
};

export default AdminUserScreen;
