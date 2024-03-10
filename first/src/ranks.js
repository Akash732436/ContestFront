import Nav from "./includes/nav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContestRanks = () => {
  const { contestName } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/api/1/${contestName}/ranks`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let s = "";
        let i = 1;
        data.forEach((element) => {
          s += `<tr ><td>${i}</td><td>${element["username"]}</td><td>${element["total"]}</td></tr>`;
          i += 1;
        });
        document.getElementById("ranks").innerHTML = s;
      });
  }, []);
  const n1 = (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Rank</th>
              <th>UserName</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody id="ranks">
            <tr>
              <td>ranks</td>
              <td>name</td>
              <td>Points</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
  return n1;
};
export default ContestRanks;
