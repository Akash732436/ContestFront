import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContestFuture = (props) => {
  const id = props.id;
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/future`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        let s = "";

        data.forEach((element) => {
          //console.log(element["start_time"]);
          element["start_time"] =
            element["start_time"].substring(0, 10) +
            " " +
            element["start_time"].substring(11, 19);
          element["end_time"] =
            element["end_time"].substring(0, 10) +
            " " +
            element["end_time"].substring(11, 19);
          s +=
            `<tr><div></div><td>${element["contest_name"]}</td><td>${element["username"]}</td><td>${element["start_time"]}</td><td>${element["duration"]}</td></tr>`;
        });
        document.getElementById("past").innerHTML = s;
        console.log(data.length);
        if(data.length==0){
            
            document.getElementById("fut").innerHTML = "No up comming contests";
            document.getElementById("fut").style.color = "red";
            document.getElementById("fut").style.textAlign = "center";
            document.getElementById("fut").style.fontSize = "24px";
        }
      });
  }, []);
  const n1 = (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="danger" id="fut">
          <h4 className="text-muted">Future contest</h4>
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Contest name</th>
                <th>Organizer</th>
                <th>Start time</th>
                <th>Duration in minutes</th>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br/><br/>
    </>
  );

  return n1;
};

export default ContestFuture;