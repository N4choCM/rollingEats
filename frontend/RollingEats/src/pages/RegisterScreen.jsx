import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../css/register.css";
import {register} from "../helpers/UserApi"

const RegisterScreen = () => {
	const navigate = useNavigate();

	const [formValues, setFormValues] = useState({
		name: ``,
		email: ``,
		password: ``,
		passwordConfirmation: ``,
	});
	const [message, setMessage] = useState(false);

	const handleChange = (e) => {
		setMessage(false);
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault;
		    
    if (!formValues.email || !formValues.name || !formValues.password) {
			setMessage(true);
		}

    if(formValues.password != formValues.passwordConfirmation){
      setMessage(true)
    }

		if (formValues) {
      const PAYLOAD = {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      }
      register(PAYLOAD)
    
			navigate("/login");
		}
	};

	return (
		<div className="register-body">
			<div className="container container-register">
				<div className="row px-2">
					<div className=" card-register">
						<div>
							<img src={logo} />
						</div>
						<h3 className="text-center mt-2 text-white">
							<span>
								<i
									className="fa fa-user-circle"
									aria-hidden="true"
								></i>{" "}
							</span>
							Welcome to
						</h3>
						<form onSubmit={handleSubmit}>
							<div className="mt-4">
								<label className="fw-bold text-white">
									Nombre
								</label>
								<input
									type="text"
									className="form-control"
									name="name"
									value={formValues.name}
									onChange={handleChange}
								/>
								{message && (
									<p className="text-danger m-0">
										{" "}
										Faltan datos en el campo
									</p>
								)}
							</div>
							<div className="mt-3">
								<label className="fw-bold text-white">
									Email
								</label>
								<input
									type="email"
									className="form-control"
									name="email"
									value={formValues.email}
									onChange={handleChange}
									placeholder="example@example.com"
								/>

								{message && (
									<p className="text-danger m-0">
										Faltan datos en el campo.
									</p>
								)}
							</div>

							<div className="mt-3 text-white">
								<label className="fw-bold">Contraseña</label>
								<input
									type="password"
									name="password"
									onChange={handleChange}
									className="form-control"
									value={formValues.password}
								/>
								{message && (
									<p className="text-danger m-0">
										{" "}
										Faltan datos en el campo.
									</p>
								)}
							</div>
							<div className="mt-3 text-white">
								<label className="fw-bold">
									Confirmar contraseña
								</label>
								<input
									type="password"
									className="form-control"
									name="passwordConfirmation"
									onChange={handleChange}
									value={formValues.passwordConfirmation}
								/>
								{message && (
									<p className="text-danger m-0">
										{" "}
										Faltan datos en el campo.
									</p>
								)}
							</div>

							<div className="mt-3 d-grid">
								<button className="btn btn-dark">
									Registrarse
								</button>
							</div>

							<div className="mt-3 text-white">
								<p>¿Ya eres miembro?</p>
								<div className="text-center">
									<a href=" ">Inicia sesión</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterScreen;
