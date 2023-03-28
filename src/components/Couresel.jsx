import React from "react";

const Couresel = () => {
  return (
    <div className="container-head">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img
              src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-1-min.png"
              className="d-block w-100"
              alt="#"
            />
            <div className="left-infos">
            <div className="text-1">
              <h1>Don't miss amazing grocery deals</h1>
            </div>
            <div className="total-text">
              <div className="text-2">
                <p>
                Sign up for the daily newsletter
                </p>
              </div>
              <div className="subscribe">
                <input type="text" placeholder="Your email adress" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/slider-2-min.png"
              className="d-block w-100"
              alt="#"
            />
            <div className="left-infos">
            <div className="text-1">
              <h1>Fresh Vegetables Big discount</h1>
            </div>
            <div className="total-text">
              <div className="text-2">
                <p>
                 Save up to 50% off on your first order
                </p>
              </div>
              <div className="subscribe">
                <input type="text" placeholder="Your email adress" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Couresel;
