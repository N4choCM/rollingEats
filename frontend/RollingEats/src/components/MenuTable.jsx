import React, { useState } from "react";
import { deleteMenuById } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import EditMenuModal from "./EditMenuModal";

const MenuTable = ({ menus = [] }) => {
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

  const inactivarMenu = async (name, id) => {
    MySwal.fire({
      title: `Está seguro que quiere inactivar el menu ${name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMenuById(id).then((resultado) => {
          MySwal.fire("", `${resultado.msg}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("El menu no se inactivó", "", "info");
      }
    });
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu._id}>
              <th>{menu.name}</th>
              <th>{menu.description}</th>
              <td>{menu.category.name}</td>
              <td>{menu.price}</td>
              <td>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleShow(menu._id)}
                  >
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => inactivarMenu(menu.name, menu._id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {show && (
        <EditMenuModal show={show} handleClose={handleClose} mid={mid} />
      )}
    </>
  );
};

export default MenuTable;
