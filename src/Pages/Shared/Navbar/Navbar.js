import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <Link
              to="/"
              className="navbar-text h2 fw-bold"
              style={{
                cursor: "pointer",
                color: "#2c2c54",
                textDecoration: "none",
              }}
            >
              Alluring Perfumes
            </Link>
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

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav w-100 d-flex justify-content-end">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold mx-2"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold mx-2" to="/explore">
                  Explore
                </NavLink>
              </li>
              {user.email && (
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold mx-2" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              )}
              {user.email ? (
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-outline-dark">
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold mx-2" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
