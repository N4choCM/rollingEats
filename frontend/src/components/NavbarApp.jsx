import React from "react";
import "../css/navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarApp = ({ logoutUser, user }) => {
	return (
    <header className="fixed-top">
		<nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
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
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								aria-current="page"
								to="/"
							>
								<i
									className="fa fa-home me-1"
									aria-hidden="true"
								></i>
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/orders"
								user={user}
							>
								<i
									className="fa fa-shopping-cart me-1"
									aria-hidden="true"
								></i>
								Pedidos
							</NavLink>
						</li>
						{user.role === "ADMIN_ROLE" && (
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									data-bs-toggle="dropdown"
									href="#"
									role="button"
									aria-expanded="false"
								>
									<i
										className="fa fa-cog me-1"
										aria-hidden="true"
									></i>
									Admin
								</a>
								<ul className="dropdown-menu navbar-custom">
									<li className="dropdown-item hover-custom">
										<NavLink
											className="nav-link"
											to="/admin/users"
										>
											<i
												className="fa fa-user me-1"
												aria-hidden="true"
											></i>
											Usuarios
										</NavLink>
									</li>
									<li className="dropdown-item hover-custom">
										<NavLink
											className="nav-link"
											to="/admin/menus"
										>
											<i
												className="fa fa-cutlery me-1"
												aria-hidden="true"
											></i>
											Menús
										</NavLink>
									</li>
									<li className="dropdown-item hover-custom">
										<NavLink
											className="nav-link"
											to="/admin/orders"
										>
											<i
												className="fa fa-truck me-1"
												aria-hidden="true"
											></i>
											Pedidos
										</NavLink>
									</li>
								</ul>
							</li>
						)}
					</ul>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<button
								className="btn nav-link btn-outline-danger text-danger red-white-text"
								onClick={logoutUser}
							>
								Cerrar sesión
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    /</header>
	);
};

export default NavbarApp;
