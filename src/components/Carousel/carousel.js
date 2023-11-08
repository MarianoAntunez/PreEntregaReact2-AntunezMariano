import React from "react";
import "./carousel.css";
import Car1 from "./car1.png";
import Car2 from "./car2.png";
import Car3 from "./car3.png";
import Car4 from "./car4.png";

export const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Car1} className="d-block w-100" alt="img1"></img>
        </div>
        <div className="carousel-item">
          <img src={Car2} className="d-block w-100" alt="img2"></img>
        </div>
        <div className="carousel-item">
          <img src={Car3} className="d-block w-100" alt="img3"></img>
        </div>
        <div className="carousel-item">
          <img src={Car4} className="d-block w-100" alt="img4"></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
