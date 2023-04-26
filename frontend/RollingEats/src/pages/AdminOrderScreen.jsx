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

  const blockpedido = async (name, id) => {
    MySwal.fire({
      title: `¿Está seguro que quiere inactivar el pedido ${name}?`,
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
      console.log(response);
      setOrders(response.pedidos);
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
                Pedido
              </th>
              <th scope="col" className="text-center">
                ¿En reparto?
              </th>
              <th scope="col" className="text-center">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((pedido) => (
              <tr key={pedido.mid}>
                <td className="text-center">{pedido.mid}</td>
                <td className="text-center">{pedido.name}</td>
                <td className="text-center">{pedido.reparto}</td>
                <td className="text-center">{pedido.price}</td>
                <td className="text-center">
                  <button
                    className="btn"
                    onClick={() => blockpedido(pedido.oid)}
                  >
                    <i
                      className="fa fa-trash text-danger"
                      aria-hidden="true"
                    ></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => handleShow(pedido.oid)}
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
