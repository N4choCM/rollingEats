import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/LoginApi";
import logo from "../assets/logo.png";
import "../css/login.css";
import LoginMessageApp from "../components/LoginMessageApp";
import { Link } from "react-router-dom";

const LoginScreen = ({ loginUser, saveUser }) => {
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);

	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			email: emailInput,
			password: passwordInput,
		};

		const resp = await login(data);
		if (resp?.token) {
			localStorage.setItem("token", JSON.stringify(resp.token));
			loginUser();
			const { name, email, role, uid } = resp.user;
			saveUser({
				name,
				email,
				role,
				uid,
			});
			navigate("/");
		} else {
			setError("Email o contraseña incorrectos");
		}
		setResult(resp);
		setLoading(false);
	};

	return (
		<div className="body-bg d-flex align-self-center align-items-center">
			<div className="bg-dark bg-gradient rounded w-50 mx-auto p-4">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-6 offset-md-3 card-login">
							<h3 className="text-center text-white mt-2">
								Bienvenido a
							</h3>
							<div className="d-flex justify-content-center align-items-center">
								<img
									src={logo}
									alt="logo"
									className="d-none d-md-block logo"
								/>
								<img
									src={logo}
									alt="logo"
									className="d-md-none logo-sm"
								/>
							</div>
							<form onSubmit={handleLogin} className="py-4">
								<div className="mt-3 text-white">
									<label className="fw-bold">Email</label>
									<input
										type="email"
										className="form-control"
										value={emailInput}
										onChange={(e) =>
											setEmailInput(e.target.value)
										}
										maxLength={40}
									/>
								</div>
								<div className="mt-3 text-white">
									<label className="fw-bold">
										Contraseña
									</label>
									<div className="input-group">
										<input
											type={
												showPassword
													? "text"
													: "password"
											}
											className="form-control"
											value={passwordInput}
											onChange={(e) =>
												setPasswordInput(e.target.value)
											}
											maxLength={40}
										/>
										<button
											type="button"
											className="btn btn-outline-secondary"
											onClick={() =>
												setShowPassword(!showPassword)
											}
										>
											{showPassword
												? <i className="fa fa-eye-slash eye-color" aria-hidden="true"></i>
												: <i className="fa fa-eye eye-color" aria-hidden="true"></i>}
										</button>
									</div>
								</div>
								<div className="mt-3 d-grid text-white pb-2">
									<button
										className="btn btn-outline-warning"
										disabled={loading && true}
									>
										Iniciar sesión
									</button>
								</div>
								{error && (
									<p className="text-danger">{error}</p>
								)}
								<hr className="text-white" />
								<Link to={`/register`} className="text-white">
									¡Regístrate aquí! 😁
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
