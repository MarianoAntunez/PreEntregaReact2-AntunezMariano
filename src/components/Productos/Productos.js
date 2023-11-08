import React, { useState } from "react";
import "./style.css";
import Data from "../../Data";
import { Link } from "react-router-dom";

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const filtrarPorCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const mostrarTodosLosProductos = () => {
    setCategoriaSeleccionada(null);
  };

  return (
    <div>
      <div className="col-sm12">
        <aside>
          <div className="filtrado">
            <p id="categoria"
              className={categoriaSeleccionada === null ? "selected" : ""}
              onClick={mostrarTodosLosProductos}
            >
              TODOS
            </p>
            <p id="categoria"
              className={categoriaSeleccionada === "URBAN" ? "selected" : ""}
              onClick={() => filtrarPorCategoria("URBAN")}
            >
              URBAN
            </p>
            <p id="categoria"
              className={categoriaSeleccionada === "RELAX" ? "selected" : ""}
              onClick={() => filtrarPorCategoria("RELAX")}
            >
              RELAX
            </p>
            <p className="disabled">Exclusive</p>
          </div>
        </aside>
      </div>
      <div className="container-fluid cent-cont">
        <div className="row">
          {Data.filter(
            (producto) =>
              !categoriaSeleccionada ||
              producto.categoria === categoriaSeleccionada
          ).map((producto, index) => (
            <div className="col-sm-4" key={index}>
              <div className="box" key={producto.id}>
                <img src={producto.img} alt={producto.nombre} />
                <h4>{producto.nombre}</h4>
                <h1 className="price">${producto.precio}</h1>
                <div className="comandos">
                  <button className="btn">Add to Cart</button>
                  <Link className="btn" to={`/productos/${producto.id}`}>
                    Ver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
