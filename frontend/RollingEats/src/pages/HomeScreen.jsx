import React, { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import MenuFilter from "../components/MenuFilter";

import { getMenus } from "../helpers/MenuApi";

import "../css/home.css";
import MenuPagination from "../components/MenuPagination";

const HomeScreen = () => {
	const [category, setCategory] = useState("");
	const [menus, setMenus] = useState(null);

	const [page, setPage] = useState(0);
	const [totalMenus, setTotalMenus] = useState(0);

	const checkedCategory = (category) => {
		setCategory(category);
	};

	useEffect(() => {
		setMenus(null);
		findMenus();
	}, [category]);

	const findMenus = async () => {
		const { menus, total } = await getMenus(page);
		setTotalMenus(total);
		if (category) {
			const filteredMenus = menus.filter((item) => {
				return item.category.name == category; //! item.category?
			});
			console.log(filteredMenus);
			setCursos(filteredMenus);
		} else {
			setCursos(menus);
		}
	};

	return (
		<div className="bg-home min-vh-100">
			<div className="container">
				<div className="row pt-5">
					<div className="col-12 col-md-6">
						<h1 className="title">¿Tienes hambre?</h1>
						<p className="texto">
							Rolling Eats ofrece menús en línea para todos los
							gustos, desde opciones vegetarianas hasta comida
							gourmet y para dietas específicas. La información
							detallada sobre ingredientes y valores nutricionales
							ayuda a tomar decisiones informadas. La compra en
							línea es cómoda y práctica, ideal para personas con
							horarios ocupados o limitaciones físicas.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<MenuFilter
							checkedCategory={checkedCategory}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col my-3">
						<h3>{category ? category : "ALL"}</h3>

						{menus?.length == 0 && (
							<div className="text-center mt-2">
								<h4>
									¡Oops! Actualmente no disponemos de menús para la categoría seleccionada, 
                  pero nuestro equipo está trabajando duro para poder ofrecer más tipos 
                  de comida en el futuro próximo. 😁
								</h4>
							</div>
						)}
					</div>
				</div>
				{!menus ? (
					<div className="row">
						<div className="col">
							<h3 className="text-white">Cargando...</h3> //! Spinner?
						</div>
					</div>
				) : (
					<div className="row row-cols-1 row-cols-md-3 g-4 pb-3 ">
						{menus.map((menu) => (
							<MenuCard key={menu._id} menu={menu} />
						))}
					</div>
				)}
				{/* <div className="row">
          <div className="col">
            {totalCursos > 0 && (
              <PaginationCursos
                total={totalCursos}
                pagina={pagina}
                setPagina={setPagina}
              />
            )}
          </div>
        </div> */}
			</div>
		</div>
	);
};

export default HomeScreen;
