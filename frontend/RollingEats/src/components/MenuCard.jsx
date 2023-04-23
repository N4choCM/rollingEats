import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/cards.css";
import {createOrder} from "../helpers/OrderApi";


const MenuCard = ({ menu }) => {  

  const [name, setName] = useState(null);

  const handleCreateOrder = async (e, menuName) => {
    console.log(menuName)
    e.preventDefault();
    setName(menuName);

    const data = ({
      menu: menuName // Asignar directamente el valor de menuName al objeto data
    });
    const resp = await createOrder(data);
  };
  return (
    <div className="col ">
      <div className="card h-100 text-dark ">
        <div>
          <img src={menu.img} className="card-img-top" alt={menu.name} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between mt-2">
          <div>
            <h5 className="card-title text-center">{menu.name}</h5>
          </div>
          <div>
            <p className="card-text">{menu.description}</p>
          </div>
          <div className="mb-3 mt-2">
            <p className="card-text text-end fw-bold">{menu.price} €</p>
          </div>

          <button className="btn btn-card" onClick={(e) => handleCreateOrder(e, menu.name)}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;