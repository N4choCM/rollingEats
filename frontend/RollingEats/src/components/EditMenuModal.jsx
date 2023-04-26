import React, { useState, useEffect } from "react";
import { getMenuById, editMenuById } from "../helpers/MenuApi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "react-bootstrap/Modal";

const EditMenuModal = ({ show, handleClose, mid }) => {
  const MySwal = withReactContent(Swal);

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    traerDatosDeMenu();
  }, []);

  const traerDatosDeMenu = async () => {
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
    MySwal.fire("Menu actualizado", "", "success");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Menu</Modal.Title>
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
              />
              <label className="fw-bold">Descripcion</label>
              <textarea
                className="form-control"
                value={menu.description}
                onChange={handleChange}
                name="description"
              ></textarea>
              <label className="fw-bold">Precio</label>
              <input
                type="number"
                className="form-control"
                value={menu.price}
                onChange={handleChange}
                name="price"
              />

              <div className="d-grid mt-2">
                <button className="btn btn-warning">Actualizar</button>
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
