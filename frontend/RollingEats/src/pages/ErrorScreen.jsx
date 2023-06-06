import React from "react";
import image from "../assets/404.svg";
import "../css/error.css";

const ErrorScreen = () => {
	return (
		<>
		<br /> <br /><br /><br /> <br />
		<div className="container">
			<div className="row">
				<div className="col col-lg-6 my-auto text-rolling-eats">
					<h1>
						¡Oops! Parece que no hemos encontrado lo que buscabas.
						😢
					</h1>
					<h2>Pero no te preocupes, tenemos muchos menús.</h2>
					<h3>¡Te aseguramos que hoy no te quedas sin comer!</h3>
				</div>
        <div className="col col-lg-6 my-auto">
          <img className="w-100 w-lg-50" src={image} alt="Error 404" />
        </div>
			</div>
		</div>
		<br />
		</>
	);
};

export default ErrorScreen;
