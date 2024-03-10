import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/images/laptop_with_code.png";
import img2 from "./assets/images/developer-coding.svg";
import img3 from "./assets/images/hire.jpg";
import img4 from "./assets/images/code_discuss.png";
import { Link } from "react-router-dom";
import "./css/main.css";

const Main = () => {
  const n1 = (
    <div id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <h2>code_Dada</h2>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#section3">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">
              talk is cheap show the code
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">-Linus Torvalds</h2>
            <br></br>
            <br></br>
            <a className="btn btn-primary js-scroll-trigger" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </header>
      <section className="about-section text-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">we codedada</h2>
              <p className="text-white-50">
                Made with passion by <br></br>{" "}
                <span>Akash Hooda, Guhan M, Ravechandr, Rohit Sharma</span>
              </p>
            </div>
          </div>
          <img className="img-fluid" src={img1} alt="an image" />
        </div>
      </section>

      <section className="section2 bg-light">
        <div className="container">
          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={img2} alt="" />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>Competitive Programming</h4>
                <p className="text-black-50 mb-0">
                  This is a competitive coding platform
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={img3} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="sec2-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-black">Why wait?</h4>
                    <p className="mb-0 text-black-50">
                      Just Create account and solve challenging problems
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={img4} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-white text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-black">We Codedada</h4>
                    <p className="mb-0 text-black-50">
                      An open source initiative
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3" id="section3">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <h2 className="text-white mb-5">YOU NEW??!!</h2>
              <form className="form-inline d-flex">
                <pre>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter email ..."
                    required
                  />
                  <p id="email-error" className="text-danger"></p>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Enter username ..."
                    min="4"
                    max="50"
                    required
                  />
                  <p id="username-error" className="text-danger"></p>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="Enter password ..."
                    min="4"
                    max="20"
                    required
                  />
                  <p></p>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password ..."
                    min="4"
                    max="20"
                    required
                  />
                  <p id="password-mismatch-error" className="text-danger"></p>
                  <button
                    className="btn btn-primary mx-auto"
                    type="submit"
                    value="register "
                  >
                    Register
                  </button>
                </pre>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section bg-black" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    somewhere in the cloud
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">hello@codedada.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">9616123719872391</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          <a className="mx-2" href="#!">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="mx-2" href="#!">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="mx-2" href="#!">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright © codeDada.com 2020</div>
      </footer>
    </div>
  );
  return n1;
};

export default Main;
