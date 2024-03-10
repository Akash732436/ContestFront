import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContestPast = (props) => {
  const id = props.id;
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/past`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        let s = "";

        data.forEach((element) => {
          if(element["users"]==null) element["users"]=0;
          element["start_time"] =
            element["start_time"].substring(0, 10) +
            " " +
            element["start_time"].substring(11, 19);
          element["end_time"] =
            element["end_time"].substring(0, 10) +
            " " +
            element["end_time"].substring(11, 19);
          s +=
            `<tr><div></div><td>${element["contest_name"]}</td><td>${element["username"]}</td><td>${element["start_time"]}</td><td>${element["duration"]}</td><td><a href="/${id}/${element["contest_name"]}/ranks"` +
            `>Ranks</a></td><td>${element["users"]}</td></tr>`;
        });
        document.getElementById("past").innerHTML = s;
      });
  }, []);
  const n1 = (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="past-contest mt-5">
          <h4 className="text-muted">Past contest</h4>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Contest name</th>
                <th>Organizer</th>
                <th>Start time</th>
                <th>Duration in minutes</th>
                <th>Ranks</th>
                <th>Users</th>
              </tr>
            </thead>
            <tbody id="past">
              <tr>
                <td>Contest name</td>
                <td>Organizer name</td>
                <td>Start Time</td>
                <td>
                  <div></div>
                  Duration
                </td>
                <td>
                  <Link to="/">Ranks</Link>
                </td>
                <td>Users</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  return n1;
};

export default ContestPast;
