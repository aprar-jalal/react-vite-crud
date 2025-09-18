import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger-subtle navbar-dark  position-fixed w-100 z-1 top-0">
      <div className="container ">
        <Link className="navbar-brand fw-bold fs-1" to={"/"}>
          Fabulous
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  justify-content-lg-end " id="navbarNavAltMarkup">
          <div className="navbar-nav fw-bold fs-6">
            <Link className="nav-link active" aria-current="page" to={"/"}>
            Productes
            </Link>
            <Link className="nav-link active" aria-current="page" to={"/Allusers"}>
              Users
            </Link>
            <Link className="nav-link active" aria-current="page" to={"/about"}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
