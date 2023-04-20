import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
const LoginScreen = ({ loginUser }) => {
  const navigate = useNavigate(); //Variable que me traera todas las funciones del useNavigate
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setShowMessage(false);
    setFormValues({
      ...formValues, //Me mantenga todo lo que tenga formValues
      [e.target.name]: e.target.value, //Pero modificame cualquier elemento que tenga adentro segun el name por value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: "rolling@rolling.com",
      password: "123456",
    };

    const { email, password } = formValues;

    if (!email) {
      setShowMessage(true);
    }
    if (email === user.email && password === user.password) {
      loginUser();
      navigate("/");
    } else {
      alert("Email o contraseña incorrecta");
    }

    if (!password) {
      setShowMessage(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-content-center card border-success mt-5 w-50">
      <div className="card-header bg-transparent border-success row">
        <div className="col text-center">
          <img
            className="modif-logo"
            src="src/assets/rollingEatsLogo2.jpg"
            alt="logo"
          />
          <h3>Ingresar a Restaurant Eats</h3>
        </div>
      </div>
      <div className="card-body text-success row">
        <div className="col col-md-6 offset-md-3">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-group was-validated  mb-3 d-grid">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Por favor introduzca su email correctamente
              </div>
              {showMessage && (
                <p className="text-danger m-0">Faltan datos del campo</p>
              )}
            </div>
            <div className="form-group was-validated mb-3 d-grid">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              {showMessage && (
                <p className="text-danger m-0">Faltan datos del campo</p>
              )}
            </div>
            <div className="form-group mb-3">
              <input type="checkbox" className="form-check-input" />
              <label htmlFor="check" className="form-check-label">
                Recordar usuario
              </label>
            </div>
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
      <div className="card-footer bg-transparent border-success row text-center">
        <div className="col">
          <span>
            ¿Te olvidaste la contraseña?
            <a href="src/pages/ErrorScreen.jsx" target="black">
              {" "}
              Recuperar contraseña
            </a>
          </span>
          <br />
          <span>
            No tienes cuenta aun?{" "}
            <a href="src/pages/ErrorScreen.jsx" target="black">
              !Registrate!
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
