import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/login.css";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { useState } from "react";
import img1 from "./assets/images/login-bg.jpg";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmit = (e) => {
    //const history=useNavigate();
    e.preventDefault();
    const check = { name, password };
    //console.log(check);
    fetch(`http://localhost:3000/api/login/${name}/${password}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data["account_id"]);
        if (data != "Wrong Credentials" && data != "Does not exist") {
          document.getElementById("goto").href = `/${data["account_id"]}`;
          document.getElementById("goto").click();
        } else {
          document.getElementById("Hello").innerHTML = data;
        }
      });
  };
  const n1 = (
    <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}>
      <div className="container">
        <div className="login-card-wrapper">
          <div className="card login-card">
            <div className="card-body">
              <h2 className="login-card-title">Login</h2>
              <p className="login-card-description">
                Sign in to your account to continue.
              </p>
              <form onSubmit={HandleSubmit}>
                <div className="form-group">
                  <span className="text-danger" id="Hello"></span>
                  <br></br>
                  <label htmlFor="username">
                    Email <span style={{ fontSize: "12px" }}>(or)</span>{" "}
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    placeholder="Email or Username"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mb-4">
                  <div className="d-flex justify-content-between">
                    <p>Password</p>
                    <a className="forgot-password-link" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <a href="/" id="goto" hidden>
                    Click
                  </a>
                </div>
                <input
                  name="login"
                  id="login"
                  className="btn login-btn"
                  type="submit"
                  value="Login"
                />
              </form>
              <p className="login-card-footer-text" style={{ color: "red" }}>
                Don't have an account?{" "}
                <Link to="/" className="text-reset" style={{ color: "blue" }}>
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return n1;
};

export default Login;
