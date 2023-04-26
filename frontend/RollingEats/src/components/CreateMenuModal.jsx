import React, { useEffect, useState } from "react";

const CreateMenuModal = ({ showCreate, handleClose }) => {
	return (
		<>
			<h3>Cargando...</h3>
			<div className="text-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		</>
	);
};

export default CreateMenuModal;
