import React from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = ({ cambiarLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pedidos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admi
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
                  <button
                    onClick={cambiarLogin}
                    className="btn btn-outline-light"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-success" type="submit" to="/login">
          Inciar Sesion
        </Link>
      </div>
    </nav>
  );
};

export default NavbarApp;
