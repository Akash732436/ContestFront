import "./assets/css/index_profile.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from "./includes/nav";
import img1 from "./assets/images/developer-coding.svg";
import img2 from "./assets/images/code_discuss.png";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/userName`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        document.getElementById("username").innerHTML = data["username"];
      });

      var xValues = ['a','b','c','d'];
var yValues = [7,8,8,9];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
  }, []);
  const n1 = (
    <div id="page-top">
      <Nav />
      <section className="section2 bg-light">
        <div className="container">
          <div className="row align-items-center  mb-4 mb-lg-5">
            <div className="col-xl-5 col-lg-7">
              <img className="img-fluid mb-3 mb-lg-0" src={img1} alt="" />
            </div>
            <div className="col-xl-3 col-lg-5">
              <div className="featured-text">
                <h1>Welcome!!</h1>
                <h4 id="username">Username</h4>
                <p className="text-black-50 mb-0"></p>
              </div>
            </div>
          </div>
          <h1 className="text-center">Your TimeLine</h1>
          <div className="container">
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <canvas id="myChart" width="600" height="300"></canvas>
            </div>

            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <img className="img-fluid" src={img2} alt="" />
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-white text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-black">Competitive Coding</h4>
                      <p className="mb-0 text-black-50">
                        Learn the competitive coding with codedada.com and work
                        as a team
                      </p>
                      <hr className="d-none d-lg-block mb-0 mr-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="mx-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="mx-2" href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright © codeDada.com 2020</div>
      </footer>
    </div>
  );
  return n1;
};

export default Profile;
