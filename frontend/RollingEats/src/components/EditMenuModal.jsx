import React from "react";
import { getMenuById, editMenuById } from "../helpers/MenuApi";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Modal from "react-bootstrap/Modal";

const EditMenuModal = ({ show, handleClose, mid }) => {
  const MySwal = withReactContent(Swal);

  const [menu, setMenu] = useState(null);
  //const [categorias, setCategorias] = useState(null);

  useEffect(() => {
    traerDatosDeMenu();
    traerCategorias();
  }, []);

  const traerDatosDeMenu = async () => {
    const { menu } = await getMenuById(mid);
    setMenu(menu);
  };

  // const traerCategorias = async () => {
  //   const { categorias } = await getCategorias();
  //   setCategorias(categorias);
  // };

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editMenuById(mid, menu);
    MySwal.fire("Menu actualizado", "", "success");
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {menu ? (
            <form onSubmit={handleSubmit}>
              <label className="fw-bold">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={menu.name}
                name="name"
                onChange={handleChange}
              />
              <label className="fw-bold">Descripcion</label>
              <textarea
                className="form-control"
                value={menu.description}
                onChange={handleChange}
                name="description"
              ></textarea>
              <label className="fw-bold">Precio</label>
              <input
                type="number"
                className="form-control"
                value={menu.price}
                onChange={handleChange}
                name="price"
              />
              {/* <div className="my-2">
                <p>
                  <span className="fw-bold">Categoría actual:</span>{" "}
                  {menu.category.name}
                </p>
                <label className="fw-bold">Cambiar categoría</label>
                <select
                  className="form-select"
                  name="category"
                  onChange={handleChange}
                >
                  <option value={menu.category.name}>
                    Elije una categoría
                  </option>
                  {categorias &&
                    categorias.map((categoria) => (
                      <option key={categoria._id} value={categoria._id}>
                        {categoria.name}
                      </option>
                    ))}
                </select>
              </div> */}
              <div className="d-grid mt-2">
                <button className="btn btn-warning">Actualizar</button>
              </div>
            </form>
          ) : (
            <h3>Cargando...</h3>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditMenuModal;
