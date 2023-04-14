import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
const LoginScreen = ({ cambiarLogin }) => {
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
      showMessage(true);
    }
    if (email === user.email && password === user.password) {
      cambiarLogin();
      navigate("/");
    } else {
      alert("Email o password incorrecto");
    }

    if (!password) {
      showMessage(true);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col text-center">
            <h3>Sign in to Restaurant Eats</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-grid">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
              {showMessage && (
                <p className="text-danger m-0">Faltan datos del campo</p>
              )}
            </div>
            <div className="mb-3 d-grid">
              <label>Password</label>
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
            <div className="mb-3 d-grid">
              <button className="btn btn-success">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
