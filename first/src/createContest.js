import Nav from "./includes/nav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/create.css";
import { useState } from "react";

const CreateContest = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [contestName, setContestname] = useState("");
  const [desc, setDesc] = useState("");
  const [level, setLevel] = useState("Easy");
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { contestName, desc, start, end, level };
    fetch(`http://localhost:3000/api/5/createContest`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data[0]["contest_id"]);
        if (data != "Failed") {
          document.getElementById(
            "goto"
          ).href = `/5/${data[0]["contest_id"]}/editContest`;
          document.getElementById("goto").click();
        } else {
          alert("Failed");
        }
      });
  };

  const n1 = (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-3"></div>
          <div className="col col-md-6">
            <div className="contest-form">
              <h2>Create your contest</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contest_name">Contest Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contest_name"
                    name="contest_name"
                    min="1"
                    max="250"
                    value={contestName}
                    onChange={(e) => {
                      setContestname(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="5"
                    cols="30"
                    value={desc}
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="start_time">Start Time</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="start_time"
                    name="start_time"
                    required
                    value={start}
                    onChange={(e) => {
                      setStart(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end_time">End Time</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="end_time"
                    name="end_time"
                    required
                    value={end}
                    onChange={(e) => {
                      setEnd(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="difficulty">Difficulty</label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    className="form-control"
                    value={level}
                    onChange={(e) => {
                      setLevel(e.target.value);
                    }}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Difficult">Difficult</option>
                  </select>
                </div>
                <input
                  type="submit"
                  name="create"
                  value="Create"
                  className="btn btn-primary"
                />
                <a href="#" id="goto" hidden>
                  Final
                </a>
              </form>
            </div>
          </div>
          <div className="col col-md-3"></div>
        </div>

        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
  return n1;
};

export default CreateContest;
