import React, { useState, useEffect } from "react";
import { getUsersWithoutStatus, deleteUserById } from "../helpers/UserApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditUserModal from "../components/EditUserModal";

const AdminUserScreen = () => {
	const [users, setUsers] = useState([]);

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

  // Block Order
  const blockUser = async (id) => {
    MySwal.fire({
      title: `¿Está seguro que quiere inactivar el usuario con ID ${id}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserById(id).then((result) => {
          fetchData();
          MySwal.fire("", `${result.msg}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("El usuario no pudo ser inactivado", "", "info");
      }
    });
  };


	useEffect(() => {
    fetchData();
	}, []);
  
  const fetchData = async () => {
    try {
      const response = await getUsersWithoutStatus();
      setUsers(response.users);
    } catch (e) {
      console.error(error);
    }
  };

	return (
    <>
    <br /><br /><br />
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
              <td className="text-center">{user.status ? "Activado" : "Desactivado"}</td>
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
    {show && (
        <EditUserModal show={show} handleClose={handleClose} uid={uid} />
      )}
    </>
	);
};

export default AdminUserScreen;
