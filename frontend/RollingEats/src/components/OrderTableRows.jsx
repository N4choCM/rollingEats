import React, { useEffect, useState } from "react";
import "../css/order-table-rows.css";
import { getMenus } from "../helpers/MenuApi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteOrderById, getOrdersByUser } from "../helpers/OrderApi";

const OrderTableRows = ({ orderProp, uid, onOrderDelete }) => {
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);

  const MySwal = withReactContent(Swal);

  // Modal management
  const [show, setShow] = useState(false);
  const [oid, setOid] = useState(null);

  // Cancel Order
  const cancelOrder = async (orderProp) => {
		MySwal.fire({
			title: `¿Está seguro de que quiere cancelar el pedido ${orderProp.menu}?`,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "Sí",
			denyButtonText: `No`,
		}).then((result) => {
			if (result.isConfirmed) {
				deleteOrderById(orderProp._id).then((result) => {
					fetchData();
          if (onOrderDelete) {
            onOrderDelete();
          }
					MySwal.fire("", `Pedido cancelado correctamente.`, "success");
				});
			} else if (result.isDenied) {
				MySwal.fire(`El pedido ${orderProp.menu} no ha sido cancelado.`, "", "info");
			}
		});
	};

  const fetchMenus = async () => {
    const menus = await getMenus();
    setMenus(menus.menus);
  };

  const fetchData = async () => {
		try {
			const response = await getOrdersByUser(uid);
			// setMenus(response.menus);
		} catch (e) {
			console.error(e);
		}
	};

  useEffect(() => {
    fetchData();
    fetchMenus();
}, []);
const menu = menus.find((menu) => menu.name === orderProp.menu);


  return (
    <tr>
      <td className="text-center">{orderProp.date}</td>
      <td className="text-center">{menu && menu.name }</td>
      <td className={orderProp.delivered ? "text-center bg-green" : "text-center bg-red"}>{orderProp.delivered ? "Sí" : "No"}</td>
      <td className="text-center">{menu && menu.price } €</td>
      <td className="text-center"><button className="btn" onClick={() => cancelOrder(orderProp)}>        <i
          className="fa fa-trash text-danger"
          aria-hidden="true"
        ></i></button>
      </td>
    </tr>
  );
};

export default OrderTableRows;
