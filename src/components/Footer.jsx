import React from "react";
function Footer() {
 return (




    <div>

  {/* Footer Start */}
<div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-xl-9">
        <div className="mb-5">
          <div className="row g-4">

            {/* Brand / About */}
            <div className="col-md-6 col-lg-6 col-xl-5">
              <div className="footer-item">
                <a href="/" className="p-0">
                  <h3 className="text-white">
                    <i className="me-3" /> Codezypher
                  </h3>
                  {/* <img src="img/logo.png" alt="Logo" /> */}
                </a>
                <p className="text-white mb-4">
                  We build fast, modern websites and web apps using React, Node.js,
                  and SQL. From idea to launch, we handle design, development, and
                  deployment so you can focus on your business.
                </p>
                <div className="footer-btn d-flex">
                  <a className="btn btn-md-square rounded-circle me-3" href="https://www.linkedin.com/" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-md-square rounded-circle me-3" href="https://github.com/" aria-label="GitHub">
                    <i className="fab fa-github" />
                  </a>
                  <a className="btn btn-md-square rounded-circle me-3" href="https://www.instagram.com/" aria-label="Instagram">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn btn-md-square rounded-circle me-0" href="https://x.com/" aria-label="X">
                    <i className="fab fa-twitter" />
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Useful Links</h4>
                <a href="/"><i className="fas fa-angle-right me-2" /> Home</a>
                <a href="/about"><i className="fas fa-angle-right me-2" /> About Us</a>
                <a href="/services"><i className="fas fa-angle-right me-2" /> Services</a>
                {/* <a href="/work"><i className="fas fa-angle-right me-2" /> Our Work</a>
                <a href="/pricing"><i className="fas fa-angle-right me-2" /> Pricing</a>
                <a href="/faq"><i className="fas fa-angle-right me-2" /> FAQ's</a> */}
                <a href="/contact"><i className="fas fa-angle-right me-2" /> Contact</a>
              </div>
            </div>

            {/* Latest Projects (replacing Instagram grid) */}
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <h4 className="mb-4 text-white">Latest Projects</h4>
                <div className="row g-3">
                  {/* Replace thumbs with your project screenshots */}
                  {[
                    {img:"img/instagram-footer-1.jpg", link:"/work#project-1"},
                    {img:"img/instagram-footer-2.jpg", link:"/work#project-2"},
                    {img:"img/instagram-footer-3.jpg", link:"/work#project-3"},
                    {img:"img/instagram-footer-4.jpg", link:"/work#project-4"},
                    {img:"img/instagram-footer-5.jpg", link:"/work#project-5"},
                    {img:"img/instagram-footer-6.jpg", link:"/work#project-6"},
                  ].map((p, i) => (
                    <div className="col-4" key={i}>
                      <div className="footer-instagram rounded">
                        <img src={p.img} className="img-fluid w-100" alt="Project thumbnail" />
                        <div className="footer-search-icon">
                          <a href={p.link} className="my-auto" aria-label="View project">
                            <i className="fas fa-link text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Contact strip */}
        <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <div className="row g-0">
            <div className="col-12">
              <div className="row g-4">
                <div className="col-lg-6 col-xl-4">
                  <div className="d-flex">
                    <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                      <i className="fas fa-map-marker-alt fa-2x" />
                    </div>
                    <div>
                      <h4 className="text-white">Address</h4>
                      <p className="mb-0">Halifax, Nova Scotia, Canada</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                  <div className="d-flex">
                    <div className="btn-xl-square bg-primary text-white rounded p-4 me-2">
                      <i className="fas fa-envelope fa-2x" />
                    </div>
                    <div>
                      <h4 className="text-white">Email</h4>
                      <p className="mb-0">tech@codezypher.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                  <div className="d-flex">
                    <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                      <i className="fa fa-phone-alt fa-2x" />
                    </div>
                    <div>
                      <h4 className="text-white">Telephone</h4>
                      <p className="mb-0">+1 (902) 240-6651</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Newsletter */}
      <div className="col-xl-3">
        <div className="footer-item">
          <h4 className="text-white mb-4">Newsletter</h4>
          <p className="text-white mb-3">
            Get tips on performance, SEO, and product launches—straight to your inbox.
            No spam, unsubscribe anytime.
          </p>
          <div className="position-relative rounded-pill mb-4">
            <input
              className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button
              type="button"
              className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
            >
              Sign Up
            </button>
          </div>
          <div className="d-flex flex-shrink-0">
            <div className="footer-btn">
              <a
                href="tel:+10000000000"
                className="btn btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
                aria-label="Call Codezypher"
              >
                <i className="fa fa-phone-alt fa-2x" />
                <div className="position-absolute" style={{ top: 2, right: 12 }}>
                  <span><i className="fa fa-comment-dots text-secondary" /></span>
                </div>
              </a>
            </div>
            <div className="d-flex flex-column ms-3 flex-shrink-0">
              <span>Call our team</span>
              <a href="tel:+1 9022406651">
                <span className="text-white"> +1 (902) 240-6651</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-12 text-center mb-md-0">
          <span className="text-body">
            <a href="#" className="text-white">
              <i className="fas fa-copyright text-light me-2" />
              CodeZypher
            </a>
            , All right reserved.
          </span>
        </div>
       
      </div>
    </div>
  </div>
  {/* Copyright End */}

    </div>
 )



}
export default Footer