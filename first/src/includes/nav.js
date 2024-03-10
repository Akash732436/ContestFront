//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/index_profile.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Nav = () => {
  const { id } = useParams();
  const l1 = `/${id}`;
  const l2 = `/${id}/manageContest`;
  const l3 = `/${id}/createContest`;
  const prob = `/${id}/problems`;
  const cont = `/${id}/contestPage`;
  const user = `/${id}/users`;
  //console.log(id);
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/userName`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        document.getElementById("dropdownMenuButton2").innerHTML =
          data["username"];
          if(data["admin"]==0){
            document.getElementById("manage").innerHTML="";
            document.getElementById("create").innerHTML="";
          }
      });
  }, []);
  const n1 = (
    <nav
      className="navbar navbar-expand  fixed-top"
      style={{ backgroundColor: "#2F4F4F" }}
      id="mainNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <h2>code_Dada</h2>
      </a>

      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to={cont}>
              Contests
            </Link>
          </li>

          <li className="nav-item" id="nav1">
            <Link className="nav-link" to={prob}>
              Problems
            </Link>
          </li>

          <li className="nav-item" id="nav3">
            <Link className="nav-link" to={user}>
              Users
            </Link>
          </li>
          <div className="dropdown">
            <br />
            <button
              className="btn btn dropdown-toggle-dark"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              userName
            </button>
            <ul
              className="dropdown-menu dropdown-menu"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link to={l1} className="dropdown-item active">
                  Profile
                </Link>
              </li>
              <li id="manage">
                <Link className="dropdown-item" to={l2}>
                  Manage Contest
                </Link>
              </li>
              <li id="create">
                <Link className="dropdown-item" to={l3}>
                  Create Contest
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
  return n1;
};

export default Nav;
