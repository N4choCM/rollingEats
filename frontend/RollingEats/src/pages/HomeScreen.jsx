import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

import { getMenus } from "../helpers/MenuApi";
import { searchData } from "../helpers/SearchApi";

import "../css/home.css";
import MenuPagination from "../components/MenuPagination";

const HomeScreen = ({ user }) => {
	console.log(user);
	const { uid } = user;
	console.log(uid);

	const [menus, setMenus] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const [page, setPage] = useState(0);
	const [totalMenus, setTotalMenus] = useState(0);

	useEffect(() => {
		setMenus(null);
		findMenus();
	}, []);

	const findMenus = async () => {
		const { menus, total } = await getMenus(page, page + 12);
		setTotalMenus(total);
		setMenus(menus);
	};

	const handleInputChange = (event) => {
		const value = event.target.value;
		setSearchTerm(value);
		searchData("menus", searchTerm);
	};

	return (
		<>
			<main>
				<section id="main" className="ancla">
					<div
						id="carouselExampleCaptions"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleCaptions"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
						</div>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									src="https://enlacocina.b-cdn.net/wp-content/uploads/2019/01/hamburguesas-gourmet.jpg.webp"
									className="d-block w-100"
									alt="Hamburguesa"
								/>
								<div className="carousel-caption d-none d-md-block text-bg-custom">
									<h5>Hamburguesas de otra liga</h5>
									<p>
										Prueba nuestra selección de hamburguesas
										gourmet.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://images6.alphacoders.com/609/609345.jpg"
									className="d-block w-100"
									alt="Pizza"
								/>
								<div className="carousel-caption d-none d-md-block text-bg-custom">
									<h5>
										¿A quién no le gusta la comida italiana?
									</h5>
									<p>
										Nuestras pizzas están hechas en estilo
										napoilitano y con mucho amor.
									</p>
								</div>
							</div>
							<div className="carousel-item">
								<img
									src="https://restaurantclicks.com/wp-content/uploads/2022/01/mexican-restaurants-san-diego-california.jpg"
									className="d-block w-100"
									alt="Burrito"
								/>
								<div className="carousel-caption d-none d-md-block text-bg-custom">
									<h5>¡Ándale!</h5>
									<p>
										La comida mexicana es una explosión de
										sabores, ¡y más si es de Rolling Eats!.
									</p>
								</div>
							</div>
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</section>

				<div className="bg-home min-vh-100 mb-5">
					<div className="container">
						<div className="row pt-5 w-100 mb-4">
							<div className="col-12  ">
								<h1 className="title">¿Tienes hambre?</h1>
								<p className="texto">
									Rolling Eats ofrece menús en línea para
									todos los gustos, desde opciones
									vegetarianas hasta comida gourmet y para
									dietas específicas. La información detallada
									sobre ingredientes y valores nutricionales
									ayuda a tomar decisiones informadas. La
									compra en línea es cómoda y práctica, ideal
									para personas con horarios ocupados o
									limitaciones físicas.
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col col-md-6 col-lg-4">
								<div className="input-group mb-3 ">
									<input
										type="text"
										value={searchTerm}
										onChange={handleInputChange}
										className="form-control"
										placeholder="Busca tu menú favorito"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
										maxLength={50}
									/>
									<button
										className="btn btn-custom"
										type="button"
										id="button-addon2"
									>
										<i
											className="fa fa-search text-white"
											aria-hidden="true"
										></i>
									</button>
								</div>
							</div>
						</div>
						{!menus ? (
							<div className="row">
								<div className="col">
									<h3 className="text-white">Cargando...</h3>{" "}
									//! Spinner?
								</div>
							</div>
						) : (
							<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3 ">
								{menus.map((menu) => (
									<MenuCard menuProp={menu} uid={uid} />
								))}
							</div>
						)}
						<div className="row">
							<div className="col">
								{totalMenus > 0 && (
									<MenuPagination
										total={totalMenus}
										page={page}
										setPage={setPage}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default HomeScreen;
