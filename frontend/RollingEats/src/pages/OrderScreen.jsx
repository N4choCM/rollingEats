import React, { useEffect, useState } from "react";
import "../css/cards.css";
import {getordersByUser} from "../helpers/OrderApi";

const OrderScreen = ({user}) => {
  const [menus, setMenus] = useState(null);
  const [order, setOrder] = useState(0);

  const findOrders = async () => {
  const { menus } = await getordersByUser(user);
  setMenus(menus);
};
  return (
    <div>
    {!order ? (
      <div className="row">
        <div className="col">
          <h3 className="text-white">Cargando...</h3> 
        </div>
      </div>
    ) : (
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3 ">
        {order.map((order) => (
           <OrderTable menuProp={order} />
          ))}
      </div>
    )};
    </div>
    );
};

export default OrderScreen;
