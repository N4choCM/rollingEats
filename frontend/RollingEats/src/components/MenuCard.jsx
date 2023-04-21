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
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="my-3">
            <h5 className="card-title">{menu.name}</h5>
          </div>

          <Link to={`/menus/${menu._id}`} className="btn btn-dark">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;