import React from "react";
import { Link } from "react-router-dom";
import "../css/cards.css";

const MenuCard = ({ menu }) => {
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

          <Link to={`/menus/${menu._id}`} className="btn btn-card">
            Añadir al carrito
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;