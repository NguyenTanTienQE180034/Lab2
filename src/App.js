import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./App.css"; // Import CSS tùy chỉnh của bạn

// Component Navbar
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="#">Navbar</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "100px" }}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ fontWeight: 700 }}>
              PIZZA HOUSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Connect</a>
          </li>
        </ul>
        <form className="d-flex" role="search" style={{ marginRight: "200px" }}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-search" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
}

// Component Carousel
function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="pizza1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza2.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A delicious pizza topped with fresh tomatoes and mozzarella cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza3.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A delicious pizza topped with fresh tomatoes and mozzarella cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza4.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A delicious pizza topped with fresh tomatoes and mozzarella cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="pizza5.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A delicious pizza topped with fresh tomatoes and mozzarella cheese.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Component Menu
function Menu() {
  return (
    <div className="container mybody">
      <div className="row">
        <div className="our-menu col-md-12">
          <h2>Our Menu</h2>
        </div>
      </div>

      <div className="row task1">
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-img-container">
              <img src="menu1.jpg" className="card-img-top" alt="..." />
              <div className="sale-tag">SALE</div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Margherita Pizza</h5>
              <p className="card-text">
                <span className="old-price">$40.00</span>
                <span className="new-price">$24.00</span>
              </p>
              <a href="#" className="btn btn-primary buy-btn">BUY</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="menu2.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mushroom Pizza</h5>
              <p className="card-text">$25.00</p>
              <a href="#" className="btn btn-primary buy-btn">BUY</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-img-container">
              <img src="menu3.jpg" className="card-img-top" alt="..." />
              <div className="sale-tag">NEW</div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Hawaiian Pizza</h5>
              <p className="card-text">$30.00</p>
              <a href="#" className="btn btn-primary buy-btn">BUY</a>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-img-container">
              <img src="menu4.jpg" className="card-img-top" alt="..." />
              <div className="sale-tag">SALE</div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Pesto Pizza</h5>
              <p className="card-text">
                <span className="old-price">$50.00</span>
                <span className="new-price">$30.00</span>
              </p>
              <a href="#" className="btn btn-primary buy-btn">BUY</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component BookingForm
const BookingForm = () => {
  return (
    <>
      <div className="row combo">
        <div className="col-md-12">
          <h2 style={{ textAlign: 'center', marginTop: '100px' }}>BOOK YOUR TABLE</h2>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <input
              type="text"
              className="form-control form-control-custom"
              id="name"
              placeholder="Your Name*"
            />
          </div>
          <div className="col-md-4 mb-3">
            <input
              type="email"
              className="form-control form-control-custom"
              id="email"
              placeholder="Your Email*"
            />
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue>Select a service</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <div className="mb-3" style={{ marginTop: '20px' }}>
          <textarea
            className="form-control textarea-custom"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Please write a comment"
          ></textarea>
        </div>

        <button
          className="badge"
          style={{ padding: '10px 40px', borderRadius: '5px', backgroundColor: '#fbb64c', color: 'white' }}
        >
          Send Message
        </button>
      </div>
    </>
  );
};

// Component App tổng hợp các phần
function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Menu />
      <BookingForm />
    </div>
  );
}

export default App;
