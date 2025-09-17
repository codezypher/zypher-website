import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="#" className="text-muted small">
                    <i className="fas fa-map-marker-alt text-primary me-2" />
                    Halifax, NS
                  </a>
                </div>
                <div className="ps-3">
                  <a href="mailto:tech@codezypher.com" className="text-muted small">
                    <i className="fas fa-envelope text-primary me-2" />
                    tech@codezypher.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex pe-3">
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram" /></a>
                  <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Hero Start */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <img src="img/logo.png" alt="Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars" />
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto align-items-lg-center">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/About" className="nav-item nav-link">About Us</Link>
                <Link to="/Services" className="nav-item nav-link">Services</Link>
                <Link to="/Contact" className="nav-item nav-link">Contact Us</Link>

                {/* NEW: Claim Offer CTA */}
                <Link
                  to="/claim-offer"
                  className="btn btn-primary ms-lg-3 mt-2 mt-lg-0"
                  style={{ borderRadius: "999px" }}
                >
                  Claim Offer
                </Link>
              </div>
            </div>

            <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <a
                href="#"
                className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i className="fa fa-phone-alt fa-2x" />
                <div className="position-absolute" style={{ top: 7, right: 12 }}>
                  <span><i className="fa fa-comment-dots text-secondary" /></span>
                </div>
              </a>
              <div className="d-flex flex-column ms-3">
                <span>Call to Our Experts</span>
                <a href="tel:+19022406651">
                  <span className="text-dark"> +1 (902) 240 6651</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

export default Header;
