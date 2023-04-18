import React, { useState } from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = ({ logoutUser }) => {
  return (
    <div className="grid grid-col-12 m-3">
      <div className="col-span-3">
        <Link className="navbar-brand" to="/">
          <img
            className="modif-logo"
            src="src/assets/rollingEatsLogo2.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <div
        className="collapse navbar-collapse col-span-6"
        id="navbarNavDropdown"
      >
        <a className="nav-link active" aria-current="page" href="#">
          <p>Inicio</p>
        </a>
        <a className="nav-link" href="#">
          <p>Pedidos</p>
        </a>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <p>Admi</p>
        </a>
        <ul className="dropdown-menu">
          <li>
            <NavLink className="dropdown-item" to="#">
              Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              Menus
            </NavLink>
          </li>
          <li>
            <NavLink className="dropdown-item" to="#">
              Usuarios
            </NavLink>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button
              onClick={logoutUser}
              className="btn text-dark btn-outline-danger"
            >
              <i class="fa fa-sign-out" aria-hidden="true"></i> Cerrar Sesion
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-3">
        <Link className="btn btn-outline-success" type="submit" to="/login">
          Cerrar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NavbarApp;
