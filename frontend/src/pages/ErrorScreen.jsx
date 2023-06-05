import React from "react";

const ErrorScreen = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col col-lg-6">
					<h1>
						¡Oops! Parece que no hemos encontrado lo que buscabas.
						😢
					</h1>
					<h2>Pero no te preocupes, tenemos muchos menús.</h2>
					<h3>¡Te aseguramos que hoy no te quedas sin comer!</h3>
				</div>
        <div className="col col-lg-6">
          <img src="../assets/undraw_donut_love_kau1.png" alt="Error 404" />
        </div>
			</div>
		</div>
	);
};

export default ErrorScreen;
