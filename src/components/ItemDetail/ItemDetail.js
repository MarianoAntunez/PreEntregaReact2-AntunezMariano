import React, { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Data from "../../Data";

const ItemDetail = () => {
  const { id } = useParams();
  const idNumber = parseInt(id, 10);
  const producto = Data.find((item) => item.id === idNumber);

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < producto.stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!producto) {
    return <div>Producto no disponible</div>;
  }

  const isIncrementButtonVisible = count < producto.stock;

  return (
    <>
      <article>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="boxDetail">
                <div className="imgDetail">
                  <img src={producto.img} alt={producto.nombre} />
                </div>
                <div className="detail">
                  <h1>
                    <strong>{producto.nombre}</strong>
                  </h1>
                  <p>{producto.desc}</p>
                  <small>stock: {producto.stock}</small>
                  <h3>
                    <strong>${producto.precio}</strong>
                  </h3>
                  <div className="itemTalle"></div>
                  <div className="boxDetailComandos">
                    <div className="itemCounter">
                      <div onClick={decrement} className="itemM m1">
                        <button>-</button>
                      </div>
                      <div className="itemC">
                        <span>{count}</span>
                      </div>
                      <div onClick={increment} className={`itemM m2 ${isIncrementButtonVisible ? '' : 'hidden'}`}>
                        <button>+</button>
                      </div>
                    </div>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ItemDetail;
