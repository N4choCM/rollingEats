import React, { useState } from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = ({ logoutUser }) => {
  return (
    <nav id="header" className="fixed navbar-expand-lg">
      <div className="container d-flex align-items-center">
        <Link className="logo mr-auto" to="/">
          <img
            className="modif-logo"
            src="src/assets/rollingEatsLogo2.jpg"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="nav-menu collapse navbar-collapse d-none d-lg-block">
          <ul className="d-flex">
            <li className="active">
              <Link to="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link to="/order">
                <a>Pedidos</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="d-flex w-100 justify-content-end">
          <li
            className="dropdown-toggle m-1 fs-5"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-user" aria-hidden="true"></i>Admin
            <ul className="dropdown-menu">
              <li>
                <NavLink className="dropdown-item">
                  <a>Menu</a>
                </NavLink>
              </li>
              <li>
                <li>
                  <NavLink className="dropdown-item">
                    <a>Pedidos</a>
                  </NavLink>
                </li>
              </li>
              <li>
                <li>
                  <NavLink className="dropdown-item">
                    <a>Usuarios</a>
                  </NavLink>
                </li>
              </li>
            </ul>
          </li>
          <Link
            className="btn btn-outline-danger h-50"
            type="submit"
            to="/login"
          >
            <i className="fa fa-sign-out" aria-hidden="true"></i>Cerrar Sesion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
