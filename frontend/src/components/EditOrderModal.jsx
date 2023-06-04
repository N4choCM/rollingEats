import React, { useState, useEffect } from "react";
import { getOrderById, editOrderById } from "../helpers/OrderApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "react-bootstrap/Modal";

const EditOrderModal = ({ show, handleClose, oid }) => {
  const MySwal = withReactContent(Swal);

  const [order, setOrder] = useState(null);

  useEffect(() => {
    findOrderData();
  }, []);

  const findOrderData = async () => {
    console.log(oid)
    const { order } = await getOrderById(oid);
    setOrder(order);
    console.log(order)
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
    MySwal.fire("Pedido actualizado correctamente", "", "success");
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
              <div className="my-2">
                <label className="fw-bold">¿En reparto?</label>
                <select
                  className="form-select"
                  name="delivered"
                  onChange={handleChange}
                >                  
                      <option key="true" value="true">
                        Sí
                      </option>
                      <option key="false" value="false">
                        No
                      </option>
                </select>
              </div>
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
