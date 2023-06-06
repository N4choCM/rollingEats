import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import "../css/register.css";
import { register } from "../helpers/UserApi";
import LoginMessageApp from "../components/LoginMessageApp";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
	const navigate = useNavigate(); 

  const [emailInput, setEmailInput] = useState("");
	const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

	const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validar los campos
    if (nameInput.trim() === "") {
      setNameError("Por favor, introduzca un nombre de usuario válido.");
      setLoading(false);
      return;
    }
    if (nameInput.trim() != "" && nameInput.trim() != null){
      setNameError(null)
    }
  
    if (emailInput.trim() === "") {
      setEmailError("Por favor, introduzca un email válido (example@example.com).");
      setLoading(false);
      return;
    }
    if (emailInput.trim() != "" && emailInput.trim() != null){
      setEmailError(null)
    }
  
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(passwordInput)) {
      setPasswordError("La contraseña debe contener al menos 8 caracteres, una mayúscula, una minñuscula y un número.");
      setLoading(false);
      return;
    }

    if (regex.test(passwordInput) && passwordInput.trim() != null){
      setPasswordError(null)
    }
  
    const data = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
      role: "USER_ROLE"
    };
  
    const resp = await register(data);
    navigate("/login");
    setResult(resp);
    setLoading(false);
  };
  

	return (
<div className="body-bg d-flex align-self-center align-items-center">
    <div className="bg-dark bg-gradient rounded w-50 mx-auto py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 card-login">
            <h3 className="text-center text-white mt-2">
              Bienvenido a
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" className="d-md-none logo-sm" />
              <img src={logo} alt="logo" className=" d-none d-md-block logo" />
            </div>
            <form onSubmit={handleRegister} className="py-4">
						<div className="mt-3 text-white">
                <label className="fw-bold">Nombre de usuario</label>
                <input
                  type="text"
                  className="form-control"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  maxLength={40}
                />
                {nameError && <p className="text-danger">{nameError}</p>}
              </div>
              <div className="mt-3 text-white">
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  maxLength={40}
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>
              <div className="mt-3 text-white">
                <label className="fw-bold">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  maxLength={40}
                />
                {passwordError && <p className="text-danger">{passwordError}</p>}
              </div>
              <div className="mt-3 d-grid text-white pb-2">
                <button className="btn btn-outline-warning" disabled={loading && true}>
                  Registrarse
                </button>
              </div>
              <hr className="text-white" />
              <Link to={`/login`} className="text-white text-center-important">
              ¿Ya tienes cuenta? 
							<br /> 
							¡Inicia sesión aquí! 😁
              </Link>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
	);
};

export default RegisterScreen;
