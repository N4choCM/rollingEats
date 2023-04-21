import React from "react";

const MenuPagination = ({ total, page, setPage }) => {
  const pages = [];
  const result = Math.ceil(total / 15);

  for (let i = 0; i < result; i++) {
    pages.push(i + 1);
  }

  const nextPage = () => {
    // This does not allows the user to go to the following page 
    // if he/she is already in the last page.
    if (total - page >= 15) {
      setPage(page + 15);
    }
  };

  const backPage = () => {
    if (page > 0) {
      setPage(page - 15);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className={`page-link ${page == 0 && "disabled"}`}
            onClick={backPage}
          >
            Atrás
          </button>
        </li>
        {pages.map((item, i) => (
          <li
            className={`page-item ${i * 15 == page && "active"}`}
            key={i}
          >
            <button className="page-link" onClick={() => setPage(i * 15)}>
              {item}
            </button>
          </li>
        ))}

        <li className={`page-item ${total - page < 15 && "disabled"}`}>
          <button className="page-link" onClick={nextPage}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPagination;