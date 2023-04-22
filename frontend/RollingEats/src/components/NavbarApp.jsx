import React from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarApp = ({ logoutUser, user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <Link className="navbar-brand my-auto" to="/">
          <img className="img-logo " src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                <i className="fa fa-home me-1" aria-hidden="true"></i>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/orders">
                <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
                Pedidos
              </NavLink>
            </li>
            {user.role === "ADMIN_ROLE" && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  <i className="fa fa-cog me-1" aria-hidden="true"></i>
                  Admin
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-center">
              <button className="btn nav-link btn-outline-danger text-danger red-white-text" onClick={logoutUser}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarApp;
