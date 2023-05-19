import React, { useEffect, useState } from "react";
import "../css/order-table-rows.css";
import { getMenus } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteOrderById } from "../helpers/OrderApi";

const OrderTableRows = ({ orderProp }) => {
  const [menus, setMenus] = useState([]);

  const MySwal = withReactContent(Swal);

  // Modal management
  const [show, setShow] = useState(false);
  const [oid, setOid] = useState(null);

  // Cancel Order
  const cancelOrder = async (id) => {
    MySwal.fire({
      title: `¿Está seguro de que quiere inactivar el pedido con ID ${id}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrderById(id).then((result) => {
          findOrdersByUser();
          MySwal.fire("", `${result.msg}`, "success");
        });
      } else if (result.isDenied) {
        MySwal.fire("El pedido no se pudo inactivar", "", "info");
      }
    });
  };

  useEffect(() => {
    const fetchMenus = async () => {
      const menus = await getMenus();
      setMenus(menus.menus);
    };
    fetchMenus();
}, []);
const menu = menus.find((menu) => menu.name === orderProp.menu);


  return (
    <tr>
      <td className="text-center">{orderProp._id}</td>
      <td className="text-center">{orderProp.date}</td>
      <td className="text-center">{menu && menu.name }</td>
      <td className="text-center">{orderProp.delivered ? "Sí" : "No"}</td>
      <td className="text-center">{menu && menu.price } €</td>
      <td className="text-center"><button className="btn" onClick={() => cancelOrder(orderProp._id)}>        <i
          className="fa fa-trash text-danger"
          aria-hidden="true"
        ></i></button>
      </td>
    </tr>
  );
};

export default OrderTableRows;
