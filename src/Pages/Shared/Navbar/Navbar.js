import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span
            className="navbar-text h2 fw-bold"
            style={{ cursor: "pointer", color: "#2c2c54" }}
          >
            Alluring Perfumes
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navlink-custom"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink
                className="nav-link fw-bold mx-2"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
              <NavLink className="nav-link fw-bold mx-2" to="/explore">
                Explore
              </NavLink>
              {user.email && (
                <NavLink className="nav-link fw-bold mx-2" to="/dashboard">
                  Dashboard
                </NavLink>
              )}
              {user.email ? (
                <button onClick={logout} className="btn btn-outline-dark">
                  Logout
                </button>
              ) : (
                <NavLink className="nav-link fw-bold mx-2" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
