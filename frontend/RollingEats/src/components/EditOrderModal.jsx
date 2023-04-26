import React, { useState, useEffect } from "react";
import { getOrderById, editOrderById } from "../helpers/OrderApi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "react-bootstrap/Modal";

const EditOrderModal = ({ show, handleClose, oid }) => {
  const MySwal = withReactContent(Swal);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    traerDatosDeOrder();
  }, []);

  const traerDatosDeOrder = async () => {
    const { order } = await getOrderById(oid);
    setOrder(order);
  };

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editOrderById(oid, order);
    MySwal.fire("Pedido actualizado", "", "success");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {order ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={order.name}
                name="name"
                onChange={handleChange}
              />
              <label className="fw-bold">¿En reparto?</label>
              <textarea
                className="form-control"
                value={order.reparto}
                onChange={handleChange}
                name="reparto"
              ></textarea>
              <label className="fw-bold">Precio</label>
              <input
                type="number"
                className="form-control"
                value={order.price}
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

export default EditOrderModal;
