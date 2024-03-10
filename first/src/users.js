import Nav from "./includes/nav";
import "./assets/css/index.css";
import { useEffect } from "react";

const User = () => {
  const Users = () => {
    let n1 = " ";
    useEffect(() => {
      fetch("http://localhost:3000/api/1/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          let s = "";
          let i = 1;
          data.forEach((element) => {
            s += `<tr><td>${i}</td><td>${element["username"]}</td><td>${element["total"]}</td></tr>`;
            i += 1;
          });

          //console.log(s);
          document.getElementById("user").innerHTML = s;
        });
    }, []);
    return " ";
  };
  const n1 = (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid main">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th style={{ width: "10%" }}>Rank</th>
              <th style={{ width: "70%" }}>Username</th>
              <th style={{ width: "20%" }}>Total Points Scored</th>
            </tr>
          </thead>
          <tbody id="user">
            <tr>
              <td>
                <Users />
              </td>
              <td>Username</td>
              <td>Average Points</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
  return n1;
};

export default User;
