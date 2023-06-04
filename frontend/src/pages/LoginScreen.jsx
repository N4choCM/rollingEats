import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../helpers/LoginApi";
import logo from "../assets/logo.png";
import "../css/login.css";
import LoginMessageApp from "../components/LoginMessageApp";
import { Link } from "react-router-dom";


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
    }
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
              <img src={logo} alt="logo" className="d-none d-md-block logo" />
              <img src={logo} alt="logo" className="d-md-none logo-sm" />
            </div>
            <form onSubmit={handleLogin} className="py-4">
              <div className="mt-3 text-white">
                <label className="fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  maxLength={40}
                />
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
              </div>
              <div className="mt-3 d-grid text-white pb-2">
                <button className="btn btn-outline-warning" disabled={loading && true}>
                  Iniciar sesión
                </button>
              </div>
              <hr className="text-white" />
              <Link to={`/register`} className="text-white">
              ¡Regístrate aquí! 😁
                        </Link>

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
