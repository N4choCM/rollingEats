import React, { useState, useEffect } from "react";
import { getMenus, deleteMenuById } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditMenuModal from "../components/EditMenuModal";

const AdminMenuScreen = () => {
  const [menus, setMenus] = useState([]);

  const MySwal = withReactContent(Swal);

  const [show, setShow] = useState(false);
  const [mid, setMid] = useState(null);

  const handleClose = () => {
    setMid(null);
    setShow(false);
  };

  const handleShow = (id) => {
    setMid(id);
    setShow(true);
  };

  const blockmenu = async (name, id) => {
    MySwal.fire({
      title: `¿Está seguro que quiere inactivar el menu ${name}?`,
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
        MySwal.fire("El menu no se pudo inactivar", "", "info");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getMenus();
      console.log(response);
      setMenus(response.menus);
    } catch (error) {
      console.error(error);
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
                Descripcion
              </th>
              <th scope="col" className="text-center">
                Categoria
              </th>
              <th scope="col" className="text-center">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu) => (
              <tr key={menu.mid}>
                <td className="text-center">{menu.mid}</td>
                <td className="text-center">{menu.name}</td>
                <td className="text-center">{menu.description}</td>
                <td className="text-center">{menu.category}</td>
                <td className="text-center">{menu.price}</td>
                <td className="text-center">
                  <button className="btn" onClick={() => blockmenu(menu.mid)}>
                    <i
                      className="fa fa-trash text-danger"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button className="btn" onClick={() => handleShow(menu.mid)}>
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
        <EditMenuModal show={show} handleClose={handleClose} mid={mid} />
      )}
    </>
  );
};

export default AdminMenuScreen;
