import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/LoginApi";
import logo from "../assets/logo.png";
import "../css/login.css";

const LoginScreen = ({ loginUser, saveUser }) => {
  const navigate = useNavigate(); 


  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: emailInput,
      password: passwordInput,
    };

    const resp = await login(data);
    console.log(resp);
    if (resp?.token) {
      localStorage.setItem("token", JSON.stringify(resp.token));
      loginUser();
      const { name, email, role, id } = resp.user;
      saveUser({
        name,
        email,
        role,
        id,
      });
      navigate("/");
    }
    setResult(resp);
    setLoading(false);
  };

  return (
    <div className="body-bg">
    <div className="bg-dark bg-gradient rounded w-75 mx-auto py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 offset-md-4 card-login">
            <h3 className="text-center text-white mt-2">
              Bienvenido a
            </h3>
            <div className="d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <form onSubmit={handleLogin}>
              <div className="mt-3 text-white">
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div className="mt-3 text-white">
                <label className="fw-bold">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <div className="mt-3 d-grid text-white pb-4">
                <button className="btn btn-outline-warning" disabled={loading && true}>
                  Iniciar sesión
                </button>
              </div>
            </form>
            {result?.msg && (
              <div className="mt-2">
                <LoginMessageApp message={result.msg} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginScreen;
