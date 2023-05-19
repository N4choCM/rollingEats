import React, { useState, useEffect } from "react";
import { getOrders, deleteOrderById } from "../helpers/OrderApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../css/admin.css";
import EditOrderModal from "../components/EditOrderModal";

const AdminOrderScreen = () => {
  const [orders, setOrders] = useState([]);

  const MySwal = withReactContent(Swal);

  const [show, setShow] = useState(false);
  const [oid, setOid] = useState(null);

  const handleClose = () => {
    setOid(null);
    setShow(false);
  };

  const handleShow = (id) => {
    setOid(id);
    setShow(true);
  };

  const blockOrder = async (id) => {
    MySwal.fire({
      title: `¿Está seguro que quiere inactivar el pedido con ID ${id}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrderById(id).then((result) => {
          console.log(result);
          fetchData();
          MySwal.fire("", `${result.msg}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("El pedido no se pudo inactivar", "", "info");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getOrders();
      setOrders(response.orders);
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
                Usuario
              </th>
              <th scope="col" className="text-center">
                Fecha
              </th>
              <th scope="col" className="text-center">
                Menú
              </th>
              <th scope="col" className="text-center">
                ¿En reparto?
              </th>
            <th scope="col" className="text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="text-center">{order._id}</td>
                <td className="text-center">{order.user}</td>
                <td className="text-center">{order.date}</td>
                <td className="text-center">{order.menu}</td>
                <td className="text-center">{order.delivered ? "Sí" : "No"}</td>
                <td className="text-center">
                  <button
                    className="btn"
                    onClick={() => blockOrder(order._id)}
                  >
                    <i
                      className="fa fa-trash text-danger"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleShow(order._id)}
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
        <EditOrderModal show={show} handleClose={handleClose} oid={oid} />
      )}
    </>
  );
};

export default AdminOrderScreen;
