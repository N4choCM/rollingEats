import React, { useEffect, useState } from "react";
import "../css/order-table-rows.css";
import { getMenus } from "../helpers/MenuApi";

const OrderTableRows = ({ orderProp }) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const menus = await getMenus();
      setMenus(menus.menus);
    };
    fetchMenus();
  }, []);

  // Busca el menú correspondiente al ID que se encuentra en la propiedad "orderProp"
  const menu = menus.find((menu) => menu._id === orderProp.menu);
  

  return (
    <tr>
      <td>{orderProp._id}</td>
      <td>{orderProp.date}</td>
      <td>{menu ? menu.name : ""}</td>
      <td>{orderProp.delivered ? "Sí" : "No"}</td>
      <td>{menu ? menu.price : ""}</td>
      <td>
        <i
          className="fa fa-trash d-flex justify-content-center text-danger"
          aria-hidden="true"
        ></i>
      </td>
    </tr>
  );
};

export default OrderTableRows;
