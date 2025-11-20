import React from "react";
import myPicture from "../../../img/iphone.webp";
import myPicture2 from "../../../img/iphone2.webp";

function ImageProduct() {

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner image-container">
        <div className="carousel-item active">
          <img src={myPicture} />
        </div>
        <div className="carousel-item">
           <img src={myPicture2} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default ImageProduct;
