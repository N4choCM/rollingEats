import React, { useEffect, useState } from "react";
import { getMenus } from "../helpers/MenuApi";

const MenuFilter = ({ checkedCategory }) => {
  const [categories, setCategories] = useState(null);
  //! const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    findCategories();
  }, []);

  const findCategories = async () => {
    const allowedCategories = {}
    const menus = await getMenus();
    menus.forEach((item) => {
        allowedCategories[item.category] = true
    })
    const uniqueCategories = Object.keys(allowedCategories)
    setCategories(uniqueCategories);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Categorías:</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavCate"
          aria-controls="navbarNavCate"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavCate">
          {categories && (
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <button
                  className="btn btn-dark"
                  onClick={() => checkedCategory("")}
                >
                  TODAS
                </button>
              </li>
              {categories.map((category) => (
                <li className="nav-item me-2" key={"category"}>
                  <button
                    className="btn btn-dark"
                    onClick={() => checkedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MenuFilter;