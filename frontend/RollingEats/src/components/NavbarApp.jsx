import React, { useState } from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = ({ logoutUser }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="modif-logo"
            src="src/assets/rollingEatsLogo2.jpg"
            alt="logo"
          />
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
        <div
          className=" d-flex justify-content-center collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fs-2" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-2"
                href="OrderScreen.jsx" //Ver esto
              >
                Pedidos
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-2"
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
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Pedidos
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Usuarios
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-outline-danger" type="submit" to="/login">
          <i className="fa fa-sign-out" aria-hidden="true"></i>Cerrar Sesion
        </Link>
      </div>
    </nav>
  );
};

export default NavbarApp;
