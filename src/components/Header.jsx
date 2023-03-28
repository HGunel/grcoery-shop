import React from "react";
import logo from "../assets/img/logo (1).png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-head">
          <div className="header-top">
            <Link to='/'>
              <img src={logo} alt="#" />
            </Link>
            <div className="form">
              <input type="search" placeholder="Search for products..." />
              <button>Search</button>
            </div>
            <div className="button-2">
              <button id="btn-2">
                Became Vendor <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons">
              <div className="icon-1">
                <i class="fa-solid fa-code-compare"></i>
                <p>Compare</p>
              </div>

              <div className="icon-2">
                <i class="fa-regular fa-heart"></i>
                <p>Wishlist</p>
              </div>

              <Link to="/cart" className="text-decoration-none">
                <div className="icon-3">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p>
                </div>
              </Link>

              <div className="icon-4">
                <i class="fa-regular fa-user"></i>
                <p>Account</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <div className="header-bottom">
        <nav className="navbar navbar-expand ">
          <div className="container-fluid">
            <button>
              <span>
                <i className="fa-solid fa-table"></i>
              </span>{" "}
              Browse All Categories{" "}
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="fire">
                    <i className="fa-solid fa-fire"></i>
                  </span>{" "}
                  Hote Deals
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Home{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  About
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Shop{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Vendors{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Mega Menu{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Blog{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Pages{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </a>
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </div>
              <span className="mob-icon">
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Header;
