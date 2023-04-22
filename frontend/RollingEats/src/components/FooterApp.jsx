import React from "react";
import "../css/footer.css";
import logo from "../assets/logo.png";

const FooterApp = () => {
	return (
    <footer>
      <div className="footer-custom">
      <div className="container">
        <div className="row d-flex flex-column flex-md-row gap-5 py-5">
          <div className="col d-flex justify-content-center">
            <img className="footer-logo" src={logo} alt="logo" />
          </div>
          <div className="col d-flex justify-content-center align-items-center text-white gap-5">
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
          </div>
          <div className="col text-white d-flex justify-content-center align-items-center flex-column">
            <p>Empresa</p>
            <p>Comunidades</p>
            <p>
              <span>
                <i className="fa fa-whatsapp" aria-hidden="true"></i>{" "}
              </span>
              Contacto
            </p>
          </div>
          <div className="col-12 text-center text-white">
            <span>Hecho con 🤍 &copy; RollingCode School</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
	);
};

export default FooterApp;
