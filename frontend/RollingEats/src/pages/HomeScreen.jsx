import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";

import { getMenus } from "../helpers/MenuApi";

import "../css/home.css";
import MenuPagination from "../components/MenuPagination";

const HomeScreen = () => {
	const [menus, setMenus] = useState(null);

	const [page, setPage] = useState(0);
	const [totalMenus, setTotalMenus] = useState(0);

	useEffect(() => {
		setMenus(null);
		findMenus();
	}, []);

	const findMenus = async () => {
		const { menus, total } = await getMenus(page, page+12);
		setTotalMenus(total);
		setMenus(menus);
	};

	return (
		<>
			<section id="main" className="ancla">
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="false"
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
								src="https://editorialtelevisa.brightspotcdn.com/dims4/default/ef598b8/2147483647/strip/true/crop/995x560+3+0/resize/2000x1126!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2019%2F03%2Fpizza-gourmet-01.jpg"
								className="d-block w-100"
								alt="Pizza"
							/>
							<div className="carousel-caption d-none d-md-block text-bg-custom">
								<h5>¿A quién no le gusta la comida italiana?</h5>
								<p>
									Nuestras pizzas están hechas en estilo
									napoilitano y con mucho amor.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/375px-Burrito.JPG"
								className="d-block w-100"
								alt="Burrito"
							/>
							<div className="carousel-caption d-none d-md-block text-bg-custom">
								<h5>¡Ándale!</h5>
								<p>
									La comida mexicana es una explosión de sabores,
									¡y más si es de Rolling Eats!.
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
								Rolling Eats ofrece menús en línea para todos
								los gustos, desde opciones vegetarianas hasta
								comida gourmet y para dietas específicas. La
								información detallada sobre ingredientes y
								valores nutricionales ayuda a tomar decisiones
								informadas. La compra en línea es cómoda y
								práctica, ideal para personas con horarios
								ocupados o limitaciones físicas.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col col-md-6 col-lg-4">
						<div className="input-group mb-3 ">
							<input type="text" className="form-control" placeholder="Busca tu menú favorito" aria-label="Recipient's username" aria-describedby="button-addon2" maxLength={50}/>
								<button className="btn btn-custom" type="button" id="button-addon2"><i className="fa fa-search text-white" aria-hidden="true"></i></button>
						</div>
						</div>
					</div>
					{!menus ? (
						<div className="row">
							<div className="col">
								<h3 className="text-white">Cargando...</h3> //! Spinner?
							</div>
						</div>
					) : (
						<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3 ">
							{menus.map((menu) => (
								<MenuCard key={menu._id} menu={menu} />
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
		</>
	);
};

export default HomeScreen;
