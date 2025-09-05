import React from 'react'
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true
};

const testimonials = [
    {
      img: "/img/testimonial-1.jpg",
      name: "Harper Q.",
      role: "E-commerce Founder",
      stars: 5,
      text:
        "Codezypher rebuilt our store in React/Next and checkout speed doubled. Sales are up already!"
    },
    {
      img: "/img/testimonial-2.jpg",
      name: "Mason R.",
      role: "Startup CEO",
      stars: 4,
      text:
        "Clean branding + SEO basics done right. We’re finally ranking for the terms that matter."
    },
    {
      img: "/img/testimonial-3.jpg",
      name: "Ava P.",
      role: "Agency Partner",
      stars: 5,
      text:
        "Reliable team with solid engineering practices. On-time delivery and great communication."
    },
  ];


const starRow = (n) => (
  <div className="d-flex text-primary mb-3">
    {[...Array(5)].map((_, i) => (
      <i key={i} className={`fas fa-star${i < n ? "" : " text-body"}`} />
    ))}
  </div>
);

const NextArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-next custom-arrow-btn"
    onClick={onClick}
    aria-label="Next"
  >
    <i className="fas fa-arrow-right"></i>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-arrow slick-prev custom-arrow-btn"
    onClick={onClick}
    aria-label="Previous"
  >
    <i className="fas fa-arrow-left"></i>
  </button>
);

  return (

    <div>


  {/* Carousel Start */}
<section id="home" className='bg-primary mt-4'>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7 animated fadeInLeft">
              <div className="text-sm-center text-md-start">
                <h4 className="text-white text-uppercase fw-bold mb-4">
                  Welcome to Codezypher
                </h4>
                <h1 className="display-1 text-white mb-4">
                  We Build Modern Websites & Brands
                </h1>
                <h6 className="mb-5 fs-5 text-white">
                  Full-stack web development, e-commerce, logo & branding, and SEO that
                  helps your business grow faster.
                </h6>
                <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                  <a
                    className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                    href="#services"
                  >
                    <i className="fas fa-code me-2" /> Explore Services
                  </a>
                  <a
                    className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2"
                    href="#contact"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 animated fadeInRight">
              <div className="calrousel-img" style={{ objectFit: "cover" }}>
                <img
                  src="img/carousel-2.png"
                  className="img-fluid w-100"
                  alt="Codezypher - web development & branding"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>             
          

        {/* Slide 2 */}
     
  {/* Carousel End */}
  {/* Feature Start */}
 <div id="features" className="container-fluid feature bg-light py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Why Choose Us</h4>
            <h1 className="display-4 mb-4">
              Code That Performs. Design That Converts.
            </h1>
            <p className="mb-0">
              We craft fast, accessible, SEO-friendly experiences using modern stacks like
              React, Node.js and Next.js — tailored to your goals.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-code fa-3x" />
                </div>
                <h4 className="mb-4">Modern Development</h4>
                <p className="mb-4">
                  Fast, responsive sites built with React/Node/Next.
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#services">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-shopping-cart fa-3x" />
                </div>
                <h4 className="mb-4">E-commerce Solutions</h4>
                <p className="mb-4">
                  Shopify or custom carts with secure payments.
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#services">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-paint-brush fa-3x" />
                </div>
                <h4 className="mb-4">Logo <br></br> Branding</h4>
                <p className="mb-4">
                  Unique visual identities that make your brand memorable.
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#services">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
              <div className="feature-item p-4 pt-0">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-search fa-3x" />
                </div>
                <h4 className="mb-4">SEO <br></br> Growth</h4>
                <p className="mb-4">
                  Technical SEO and content plans that improve ranking.
                </p>
                <a className="btn btn-primary rounded-pill py-2 px-4" href="#services">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* Feature End */}
  {/* About Start */}
<div id="about" className="container-fluid bg-light about pb-5">
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item-content bg-white rounded p-5 h-100">
                <h4 className="text-primary">About Codezypher</h4>
                <h1 className="display-4 mb-4">
                  We Help Businesses Go Digital
                </h1>
                <p>
                  We’re a Canada-based IT agency building high-quality web apps, e-commerce
                  stores, and brand experiences. Our work combines performance, design, and SEO.
                </p>
                <p>
                  Whether you’re launching an MVP or leveling up an existing product — we’ve got you.
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3" />
                  Clean, modern UI/UX
                </p>
                <p className="text-dark">
                  <i className="fa fa-check text-primary me-3" />
                  Secure & scalable architectures
                </p>
                <p className="text-dark mb-4">
                  <i className="fa fa-check text-primary me-3" />
                  SEO-friendly by default
                </p>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="#contact">
                  More Information
                </a>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-white rounded p-5 h-100">
                <div className="row g-4 justify-content-center">
                  <div className="col-12">
                    <div className="rounded bg-light">
                      <img
                        src="img/aboutus.jpg"
                        className="img-fluid rounded w-100"
                        alt="Design and development at Codezypher"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">20</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Projects Delivered</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">10</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Happy Clients</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">5</span>
                        <span className="h1 fw-bold text-primary">+</span>
                      </div>
                      <h4 className="mb-0 text-dark">Years Combined Exp.</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-item bg-light rounded p-3 h-100">
                      <div className="counter-counting">
                        <span className="text-primary fs-2 fw-bold">100</span>
                        <span className="h1 fw-bold text-primary">%</span>
                      </div>
                      <h4 className="mb-0 text-dark">Commitment to Quality</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  {/* About End */}
  {/* Service Start */}
<div id="services" className="container-fluid service py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Services</h4>
            <h1 className="display-4 mb-4">We Build & Grow Digital Products</h1>
            <p className="mb-0">
              From MVPs to full-scale platforms — we design, develop, and optimize for growth.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/web.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Custom Web Development"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-code fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">Custom Web Development</span>
                    <p className="mb-4">
                      React, Node.js, Next.js — scalable frontends & APIs tailored to your needs.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Start a Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/e-commerce.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="E-commerce Development"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-shopping-cart fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">E-commerce Development</span>
                    <p className="mb-4">
                      Shopify, WooCommerce or custom builds with smooth UX and secure payments.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/branding.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="Logo & Branding"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-paint-brush fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">Logo designing & Branding</span>
                    <p className="mb-4">
                      Memorable identities, brand guides, and marketing assets that convert.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      See Branding
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
              <div className="service-item">
                <div className="service-img">
                  <img
                    src="img/seo.jpg"
                    className="img-fluid rounded-top w-100"
                    alt="SEO & Digital Marketing"
                    loading="lazy"
                  />
                  <div className="service-icon p-3">
                    <i className="fas fa-search fa-2x" />
                  </div>
                </div>
                <div className="service-content p-4">
                  <div className="service-content-inner">
                    <span className="d-inline-block h4 mb-4">SEO & Digital Marketing</span>
                    <p className="mb-4">
                      Technical SEO, on-page optimization, and content plans for steady growth.
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#contact">
                      Grow Traffic
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <a className="btn btn-primary rounded-pill py-3 px-5" href="#contact">
                Tell Us About Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
  {/* Service End */}
  {/* FAQs Start */}
 <div className="container-fluid faq-section bg-light py-5">
  <div className="container py-5">
    <div className="row g-5 align-items-center">
      <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
        <div className="h-100">
          <div className="mb-5">
            <h4 className="text-primary">Some Important FAQ's</h4>
            <h1 className="display-4 mb-0">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="accordion" id="accordionExample">
            
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Q: How long does it take to build a website?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show active"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body rounded">
                  A: Timelines depend on project size. A simple business site usually
                  takes 2–3 weeks, while a custom web application can take 4–8 weeks. 
                  We’ll give you a clear timeline after discussing your requirements.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Q: Will my website be mobile-friendly?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  A: Yes, every site we build is fully responsive and tested across 
                  devices. Your customers will get the same smooth experience on 
                  phones, tablets, and desktops.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Q: Do you provide ongoing support and updates?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  A: Absolutely! We offer maintenance plans that include updates, 
                  backups, bug fixes, and small feature changes. This way, your 
                  website stays secure and up to date.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
        <img src="img/carousel-2.png" className="img-fluid w-100" alt="FAQ illustration" />
      </div>
    </div>
  </div>
</div>

  {/* FAQs End */}
  {/* Blog Start */}
  {/* <div className="container-fluid blog py-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.2s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">From Blog</h4>
        <h1 className="display-4 mb-4">News And Updates</h1>
        <p className="mb-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </p>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-item">
            <div className="blog-img">
              <img
                src="img/blog-1.png"
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="blog-categiry py-2 px-4">
                <span>Business</span>
              </div>
            </div>
            <div className="blog-content p-4">
              <div className="blog-comment d-flex justify-content-between mb-3">
                <div className="small">
                  <span className="fa fa-user text-primary" /> Martin.C
                </div>
                <div className="small">
                  <span className="fa fa-calendar text-primary" /> 30 Dec 2025
                </div>
                <div className="small">
                  <span className="fa fa-comment-alt text-primary" /> 6 Comments
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">
                Which allows you to pay down insurance bills
              </a>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                libero soluta impedit eligendi? Quibusdam, laudantium.
              </p>
              <a href="#" className="btn p-0">
                Read More <i className="fa fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
          <div className="blog-item">
            <div className="blog-img">
              <img
                src="img/blog-2.png"
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="blog-categiry py-2 px-4">
                <span>Business</span>
              </div>
            </div>
            <div className="blog-content p-4">
              <div className="blog-comment d-flex justify-content-between mb-3">
                <div className="small">
                  <span className="fa fa-user text-primary" /> Martin.C
                </div>
                <div className="small">
                  <span className="fa fa-calendar text-primary" /> 30 Dec 2025
                </div>
                <div className="small">
                  <span className="fa fa-comment-alt text-primary" /> 6 Comments
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">
                Leverage agile frameworks to provide
              </a>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                libero soluta impedit eligendi? Quibusdam, laudantium.
              </p>
              <a href="#" className="btn p-0">
                Read More <i className="fa fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
          <div className="blog-item">
            <div className="blog-img">
              <img
                src="img/blog-3.png"
                className="img-fluid rounded-top w-100"
                alt=""
              />
              <div className="blog-categiry py-2 px-4">
                <span>Business</span>
              </div>
            </div>
            <div className="blog-content p-4">
              <div className="blog-comment d-flex justify-content-between mb-3">
                <div className="small">
                  <span className="fa fa-user text-primary" /> Martin.C
                </div>
                <div className="small">
                  <span className="fa fa-calendar text-primary" /> 30 Dec 2025
                </div>
                <div className="small">
                  <span className="fa fa-comment-alt text-primary" /> 6 Comments
                </div>
              </div>
              <a href="#" className="h4 d-inline-block mb-3">
                Leverage agile frameworks to provide
              </a>
              <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                libero soluta impedit eligendi? Quibusdam, laudantium.
              </p>
              <a href="#" className="btn p-0">
                Read More <i className="fa fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Blog End */}
  {/* Team Start */}

  
{/* <div className="container-fluid team py-5">
  <div className="container pb-5">
    <div
      className="text-center mx-auto pb-5 wow fadeInUp"
      data-wow-delay="0.2s"
      style={{ maxWidth: 800 }}
    >
      <h4 className="text-primary">Our Team</h4>
      <h1 className="display-4 mb-4">Meet the People Behind Codezypher</h1>
      <p className="mb-0">
        We’re a passionate group of developers and designers who love building
        fast, scalable, and user-friendly websites. At Codezypher, collaboration,
        creativity, and clean code come first.
      </p>
    </div>
    <div className="row g-4 d-flex justify-content-center">
      
      <div
        className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
        data-wow-delay="0.2s"
      >
        <div className="team-item">
          <div className="team-img">
            <img
              src="img/team-1.jpg"
              className="img-fluid rounded-top w-100"
              alt="Tanuj Kumar"
            />
            <div className="team-icon">
              <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href="#">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="team-title p-4">
            <h4 className="mb-0">Tanuj Kumar</h4>
            <p className="mb-0">Co-Founder • CEO</p>
          </div>
        </div>
      </div>

      <div
        className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
        data-wow-delay="0.4s"
      >
        <div className="team-item">
          <div className="team-img">
            <img
              src="img/team-2.jpg"
              className="img-fluid rounded-top w-100"
              alt="Sanjeev Sharma"
            />
            <div className="team-icon">
              <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href="#">
                <i className="fab fa-github" />
              </a>
            </div>
          </div>
          <div className="team-title p-4">
            <h4 className="mb-0">Sanjeev Sharma</h4>
            <p className="mb-0">Co-Founder • CTO</p>
          </div>
        </div>
      </div>

  

  

    </div>
  </div>
</div> */}

  {/* Team End */}
  {/* Testimonial Start */}
  {/* <div className="container-fluid testimonial pb-5">
    <div className="container pb-5">
      <div
        className="text-center mx-auto pb-5 wow fadeInUp"
        data-wow-delay="0.2s"
        style={{ maxWidth: 800 }}
      >
        <h4 className="text-primary">Testimonial</h4>
        <h1 className="display-4 mb-4">What Our Customers Are Saying</h1>
        <p className="mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
          adipisci facilis cupiditate recusandae aperiam temporibus corporis
          itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
          obcaecati, ipsam mollitia hic.
        </p>
      </div>
    <div className="testimonial-slider-wrap">
  <Slider
    dots={false}
    infinite
    speed={500}
    slidesToShow={2}
    slidesToScroll={1}
    autoplay
    autoplaySpeed={3000}
    nextArrow={<NextArrow />}
    prevArrow={<PrevArrow />}
    responsive={[
      { breakpoint: 992, settings: { slidesToShow: 1 } },
    ]}
  >
    {testimonials.map((t, idx) => (
      <div key={idx} className="px-2"> 
        <div className="testimonial-item bg-light rounded">
          <div className="row g-0">
            <div className="col-4 col-lg-4 col-xl-3">
              <div className="h-100">
                <img
                  src={t.img}
                  className="img-fluid h-100 rounded"
                  style={{ objectFit: "cover" }}
                  alt={t.name}
                />
              </div>
            </div>
            <div className="col-8 col-lg-8 col-xl-9">
              <div className="d-flex flex-column my-auto text-start p-4">
                <h4 className="text-dark mb-0">{t.name}</h4>
                <p className="mb-3">{t.role}</p>
                {starRow(t.stars)}
                <p className="mb-0">{t.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
    </div>
  </div> */}
  {/* Testimonial End */}

  {/* Back to Top */}
  <a href="#"
    className="btn btn-primary btn-lg-square rounded-circle back-to-top">
    <i className="fa fa-arrow-up" />
  </a>

    </div>
    
  )
}

export default Index