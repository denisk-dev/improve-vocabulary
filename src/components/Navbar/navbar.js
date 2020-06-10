/**
 * author: Denis Kravchenko
 */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link to="/" className="navbar-brand nav-link" href="">
              Vocabularly
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/practice" className="navbar-brand nav-link" href="">
              Practice
            </Link>
          </li>
        </ul>

        <Link to="/" href="" className="btn btn-outline-info">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
