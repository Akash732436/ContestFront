import "./assets/css/index.css";
import Nav from "./includes/nav";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ContestProblem = () => {
  const { id } = useParams();
  const { contest_id } = useParams();
  const Questions = () => {
    let n1 = " ";
    useEffect(() => {
      fetch(`http://localhost:3000/api/${id}/${contest_id}/contestProblems`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          let s = "";
          data.forEach((element) => {
            s +=
              '<tr><td><svg title="Unattempted" class="svg-inline--fa fa-minus-circle fa-w-16" aria-hidden="true" style="color: rgb(220, 53, 69);" aria-labelledby="svg-inline--fa-title-IZVwhLAPubr4" data-prefix="fa" data-icon="minus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-IZVwhLAPubr4">Unattempted</title><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg></td>';
            s += `<td ><a href="/${id}/${element["question_id"]}/${contest_id}/showcontestQuestion">${element["question_name"]} </a></td><td>${element["points"]}</td><td>${element["level"]}</td><td>Users</td></tr>`;
          });
          //s+='</tr>';
          //console.log(s);
          document.getElementById("ques").innerHTML = s;
        });
    }, []);
    return " ";
  };

  const n1 = (
    <>
      <Nav />
      <div className="container-fluid main">
        <div className="question-table mt-5">
          <div className="content">
            <div id="timer"></div>
            <br></br>
          </div>
          <br></br>
          <br></br>

          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th style={{ width: "3%" }}>
                  <i className="fa fa-check" aria-hidden="true"></i>
                </th>
                <th style={{ width: "67%" }}>Question</th>
                <th style={{ width: "10%" }}>Points</th>
                <th style={{ width: "10%" }}>Level</th>
                <th style={{ width: "10%" }}>Users</th>
              </tr>
            </thead>
            <tbody id="ques">
              <tr>
                <td>
                  <i
                    title="Unattempted"
                    className="fa fa-minus-circle"
                    aria-hidden="true"
                    style={{ color: "#dc3545" }}
                  ></i>
                  <i
                    className="fa fa-times-circle"
                    aria-hidden="true"
                    style={{ color: "#dc3545" }}
                  ></i>
                  <i
                    className="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ color: "#dc3545" }}
                  ></i>
                  <i
                    className="fa fa-check-circle"
                    aria-hidden="true"
                    style={{ color: "#28a745" }}
                  ></i>
                </td>

                <td>
                  <Questions />
                </td>
                <td>points</td>
                <td>level</td>
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

export default ContestProblem;
