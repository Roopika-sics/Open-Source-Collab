import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(false); // Hide modal immediately
    logout();
    navigate("/");
  };

  // Optional: Prevent scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [showModal]);

  return (
    <>
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand logo" to="/">
            <span className="logo_Blog_Color">OPEN</span>&nbsp;
            <span className="logo_color">SOURCE</span>
          </Link>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon bg-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav navbar_list mx-auto">
              <li className="nav-item navbar_nav-item">
                <NavLink className="nav-link navbar_links" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item navbar_nav-item">
                <NavLink className="nav-link navbar_links" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item navbar_nav-item">
                <NavLink className="nav-link navbar_links" to="/services">
                  Services
                </NavLink>
              </li>
            </ul>

            <div className="ms-auto">
              {isAuthenticated ? (
                <button
                  className="btn btn-outline-warning"
                  onClick={() => setShowModal(true)}
                >
                  Logout
                </button>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-outline navbar_login_button dropdown-toggle"
                    type="button"
                    id="dropdownLoginButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownLoginButton">
                    <li>
                      <Link className="dropdown-item navbar-dropdown-item" to="/maintainers-login">
                        Maintainers Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item navbar-dropdown-item" to="/contributors-login">
                        Contributors Login
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Centered Bootstrap Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Are you sure you want to logout?</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
