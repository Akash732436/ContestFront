import Nav from "./includes/nav";
import "./assets/css/create.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditContest = () => {
  const { contestId } = useParams();
  const { id } = useParams();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [contestName, setContestname] = useState("");
  const [desc, setDesc] = useState("");
  const [level, setLevel] = useState("Easy");
  const [questionName, setQuestionName] = useState("");
  const [questionLevel, setQuestionLevel] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");
  const [testcasePoints, setTestcasePoints] = useState("");
  const [testcaseInput, setTestcaseInput] = useState("");
  const [testcaseOutput, setTestcaseOutput] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [issent, setIssent] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/${contestId}/contestDetails`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        data["start_time"] = data["start_time"].substring(
          0,
          data["start_time"].length - 1
        );
        data["end_time"] = data["end_time"].substring(
          0,
          data["end_time"].length - 1
        );
        //console.log(data["start_time"]);
        setContestname(data["contest_name"]);
        //console.log(contestName);
        setDesc(data["description"]);
        setStart(data["start_time"]);
        setEnd(data["end_time"]);
        setLevel(data["difficulty"]);
      });
    fetch(`http://localhost:3000/api/${id}/${contestId}/contestQuestions`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let s = "";
        //data=data[0];
        //data=JSON.parse(data);
        //console.log(typeof data)
        if (issent) return;
        data.forEach((element) => {
          s += ` <tr>
			<td>${element["question_name"]}</td>
			<td>${element["question_description"]}</td>
			<td>${element["level"]}</td>
			<td>${element["points"]}</td>
			<td><a href="#" ><button className="btn-m btn-danger my-1" >Delete</button></a></td>
			</tr>`;
        });
        setIssent(true);
        document.getElementById("ques").innerHTML = s;
        setIssent(false);
      });
  }, []);
  /*
	useEffect(()=>{
		fetch(`http://localhost:3000/api/${id}/${contestId}/contestQuestions`,{
    })
    .then(res=>{
        return res.json();
    })
    .then(data=>{
		let s="";
		//data=data[0];
		//data=JSON.parse(data);
		console.log(typeof data)
		data.forEach(element => {
			s+=` <tr>
			<td>${element["question_name"]}</td>
			<td>${element["question_description"]}</td>
			<td>${element["level"]}</td>
			<td>${element["points"]}</td>
			<td><a href="#" ><button className="btn-m btn-danger my-1" >Delete</button></a></td>
			</tr>`;
			
			
			
		});
		document.getElementById("ques").innerHTML=s;
    })
	},[]);*/
  const handleQuestion=(e)=>{
    e.preventDefault();
    const name = questionName;
    fetch(`http://localhost:3000/api/${id}/${contestId}/${name}/questionSearch`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data == "No") {
          const questionDetails = {
            questionName,
            contestId,
            questionDesc,
            questionLevel,
          };
          fetch(`http://localhost:3000/api/${id}/${contestId}/insertQuestion`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(questionDetails),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              data = data[0];
              //console.log(data["question_id"]);
              setQuestionId(data["question_id"]);
              //console.log(questionId);
            });
        } else {
          setQuestionId(data["question_id"]);
        }
      });
    //console.log(questionId);
  }
  const handleTestcase = (e) => {
    e.preventDefault();
    
    const test = { questionId, testcaseInput, testcasePoints, testcaseOutput };
    fetch(
      `http://localhost:3000/api/${id}/${contestId}/${questionId}/insertTestcase`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(test),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data != "Failed") {
          //document.getElementById('goto').href=`/5/${data[0]["contest_id"]}/editContest`;
          //document.getElementById('goto').click();
        } else {
          alert("Failed");
        }
      });
  };

  const n1 = (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-3"></div>
          <div className="col col-md-6">
            <div className="contest-form">
              <h2>Update your contest</h2>
              <form action="#">
                <div className="form-group">
                  <label htmlFor="contest_name">Contest Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="contest_name"
                    name="contest_name"
                    min="1"
                    max="250"
                    required
                    value={contestName}
                    onChange={(e) => setContestname(e.target.value)}
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
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="start_time">Start Time</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="start_time"
                    name="start_time"
                    value={start}
                    onChange={(e) => {
                      setStart(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end_time">End Time</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="end_time"
                    name="end_time"
                    value={end}
                    onChange={(e) => {
                      setEnd(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="difficulty">Difficulty</label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    className="form-control"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option elementue="Easy">Easy</option>
                    <option elementue="Medium">Medium</option>
                    <option elementue="Difficult">Difficult</option>
                  </select>
                </div>
                <input type="hidden" name="contestId" elementue="contest id" />
                <input
                  type="submit"
                  name="updateContest"
                  elementue="Update"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid mt-2">
        <h3>Questions</h3>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <th>Question title</th>
            <th>Question</th>
            <th>Level</th>
            <th>Points</th>
            <th>Delete</th>
          </thead>
          <tbody id="ques">
            <tr>
              <td>Question name</td>
              <td>question_desc</td>
              <td>level</td>
              <td>points</td>
              <td>
                <a href="#" className="btn btn-danger">
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container-fluid mt-2">
        <div
          className="container mt-5"
          style={{
            border: "2px solid #dc3545; padding: 2rem; border-radius: 5px;",
          }}
        >
          <h3 className="mt-1">Add Questions</h3>
          <div className="add-questions">
            <form action="#">
              <div className="form-group">
                <input type="hidden" name="contest_id" elementue="contest_id" />
                <label>Question Title</label>
                <br />
                <input
                  type="text"
                  name="question_title"
                  className="form-control"
                  required
                  value={questionName}
                  onChange={(e) => setQuestionName(e.target.value)}
                />
                <br />
                <label>Question</label>
                <br />
                <textarea
                  name="question_desc"
                  cols="30"
                  rows="3"
                  className="form-control"
                  value={questionDesc}
                  onChange={(e) => setQuestionDesc(e.target.value)}
                ></textarea>
                <br />
                <select
                  name="difficulty"
                  className="form-control"
                  value={questionLevel}
                  onChange={(e) => setQuestionLevel(e.target.value)}
                >
                  <option elementue="Easy">Easy</option>
                  <option elementue="Medium">Medium</option>
                  <option elementue="Difficult">Difficult</option>
                </select>
                <br />
                <div
                  className="testcase-group mb-3"
                  style={{
                    border:
                      "2px solid #17a2b8; padding: 2rem; border-radius: 5px;",
                  }}
                >
                  <p className="alert alert-info">
                    Leave the fields empty and points as 0 for to delete the
                    testcase
                  </p>
                  <button
                    className="btn btn-info"
                    onClick={handleQuestion}
                    disabled={issent}
                  >
                    <a id="add-question">Add Question</a>
                  </button>
                  <br />
                  <br />
                  <label>Testcase Input</label>
                  <br />
                  <textarea
                    name="testcase_input[]"
                    cols="30"
                    rows="3"
                    className="form-control"
                    value={testcaseInput}
                    onChange={(e) => setTestcaseInput(e.target.value)}
                  ></textarea>
                  <br />
                  <label>Testcase Output</label>
                  <br />
                  <textarea
                    name="testcase_output[]"
                    cols="30"
                    rows="3"
                    className="form-control"
                    value={testcaseOutput}
                    onChange={(e) => setTestcaseOutput(e.target.value)}
                  ></textarea>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    name="points[]"
                    placeholder="points"
                    required
                    value={testcasePoints}
                    onChange={(e) => setTestcasePoints(e.target.value)}
                  />
                  <br />
                  <br />
                  <button
                    className="btn btn-info"
                    onClick={handleTestcase}
                    disabled={issent}
                  >
                    <a id="add-question">Add Testcase</a>
                  </button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
  return n1;
};

export default EditContest;
