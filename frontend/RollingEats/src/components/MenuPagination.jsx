import React from "react"; 
import "../css/pagination.css"

const MenuPagination = ({ total, page, setPage }) => {
  const pages = [];
  const result = Math.ceil(total / 12);

  for (let i = 0; i < result; i++) {
    pages.push(i + 1);
  }

  const nextPage = () => {
    if (total - page >= 12) {
      setPage(page + 12);
    }
  };

  const backPage = () => {
    if (page > 0) {
      setPage(page - 12);
    }
  };

  return (
    <nav aria-label="Page navigation example text-dark">
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
            className={`page-item ${i * 12 == page && "active"}`}
            key={i}
          >
            <button className="page-link" onClick={() => setPage(i * 12)}>
              {item}
            </button>
          </li>
        ))}

        <li className={`page-item ${total - page < 12 && "disabled"}`}>
          <button className="page-link" onClick={nextPage}>
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPagination;