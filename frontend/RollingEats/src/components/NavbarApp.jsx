import React from "react";
import "../css/navbar.css";

const NavbarApp = () => {
  return;
  <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
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
          <ul className="navbar-nav">
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
                  <a className="dropdown-item" href="#">
                    Pedidos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Menus
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Usuarios
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success" type="submit">
          Inciar Sesion
        </button>
      </div>
    </nav>
  </div>;
};

export default NavbarApp;
