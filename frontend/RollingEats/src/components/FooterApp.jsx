import React from "react";
import "../css/footer.css";
import logo from "../assets/logo.png";

const FooterApp = () => {
	return (
    <footer>
      <div className="footer-custom">
      <div className="container">
        <div className="row d-flex flex-column flex-md-row gap-5 py-5">
          <div className="col-12 col-lg d-flex justify-content-center align-items-center text-white gap-5">
            <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </div>
          <div className="col-12 col-lg d-flex justify-content-center mt-4">
            <img className="footer-logo" src={logo} alt="logo" />
          </div>
          <div className="col-12 col-lg text-white d-flex justify-content-center align-items-center flex-column">
            <h4 className="text-decoration-underline mt-4">Contacto</h4>
            <p>
              <span>
                <i className="fa fa-whatsapp me-1" aria-hidden="true"></i> +34 628 523 682
              </span>
            </p>
            <p>
              <span>
                <i className="fa fa-envelope-o me-1" aria-hidden="true"></i> info@rolling-eats.com
              </span>
            </p>
          </div>
          <div className="col-12 text-center text-white">
            <span>2023 &copy; Rolling Eats</span>
          </div>
        </div>
      </div>
    </div>
    </footer>
	);
};

export default FooterApp;
