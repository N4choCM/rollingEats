import React, { useEffect, useState } from "react";
import MenuTable from "../components/MenuTable";
import { getMenus } from "../helpers/MenuApi";

const AdminScreen = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    traerMenus();
  }, [menus]);

  const traerMenus = async () => {
    const { menus } = await getMenus();
    setMenus(menus);
  };

  return (
    <div className="bg-dark">
      <div className="container bg-light min-vh-100">
        <div className="row  py-5">
          <div className="col text-center mt-5">
            <h1>
              <span>
                <i className="fa fa-cogs" aria-hidden="true"></i>{" "}
              </span>
              Panel administrador
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            {/* Componente de la tabla que carga los menus  */}
            <MenuTable menus={menus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
