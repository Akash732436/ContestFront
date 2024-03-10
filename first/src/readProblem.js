import Nav from "./includes/nav";
//import Ide from "./includes/ide";
import "./assets/css/index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadProblem = () => {
  const { id } = useParams();
  const { questionId } = useParams();
  //const [questionName,setQuestionName]=useState("");
  //const [questionDesc,setQuestionDesc]=useState("");
  const [code, setscript] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [langguage, setLangguage] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/${questionId}/questionDesc`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        document.getElementById("ques_name").innerHTML = data["question_name"];
        document.getElementById("ques_desc").innerHTML =
          data["question_description"];
      });
  }, []);

  const HandleRun = () => {
    setOutput("Loading");
    document.getElementById("outId").style = "hidden";
    document.getElementById("load").style = "visible";
    //console.log(langguage)
    let language = "c",
      versionIndex = 5;
    if (langguage == "C++ 14") {
      language = "cpp";
    } else if (langguage == "Java 8") {
      language = "java";
    } else if (langguage == "Ruby") {
      language = "rb";
    } else if (langguage == "Python 3") {
      language = "py";
    } else {
      language = "kt";
    }

    const obj = { code, input, language };
    fetch(`http://localhost:3000/api/${id}/${questionId}/ide`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        document.getElementById("outId").style = "visible";
        document.getElementById("load").style = "hidden";
        setOutput(data);
      });
  };

  const HandleSubmit = () => {
    let language = "c",
      versionIndex = 5;
    if (langguage == "C++ 14") {
      language = "cpp";
    } else if (langguage === "Java 8") {
      language = "java";
    } else if (langguage === "Ruby") {
      language = "rb";
    } else if (langguage === "Python 3") {
      language = "py";
    } else {
      language = "kt";
    }

    const obj = { code, input, language };
    fetch(`http://localhost:3000/api/${id}/${questionId}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        alert(data);
      });
  };
  const n1 = (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="fcn-grid">
          <div className="fcn-component">
            <div className="card text-white bg-primary mr-3 mt-1">
              <div className="card-header bg-dark" id="ques_name">
                Question Name
              </div>
              <br />
              <div className="card-body" id="ques_desc">
                Question Desc
              </div>
            </div>
          </div>
          <br />
          <div className="fcnn-component">
            <div
              className="ide"
              style={{ height: "67%", position: "relative", width: "60%" }}
            >
              <textarea
                rows="18"
                className="form-control"
                id="in"
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: "black",
                  color: "white",
                }}
                value={code}
                onChange={(e) => {
                  setscript(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="buttons-out">
              <div
                className="buttons"
                style={{
                  backgroundColor: "black",
                  height: "20%",
                  paddingTop: "2px",
                }}
              >
                <br />
                <button
                  className="btn btn-primary"
                  id="run-btn"
                  onClick={HandleRun}
                  style={{ float: "left", marginLeft: "40px" }}
                >
                  Run
                </button>
                <button
                  className="btn btn-primary"
                  id="sub-btn"
                  onClick={HandleSubmit}
                  style={{ float: "left", marginLeft: "40px" }}
                >
                  Submit
                </button>
                <select
                  name="lang"
                  id="lang"
                  className="form-control"
                  style={{ width: "150px", float: "left", marginLeft: "290px" }}
                  value={langguage}
                  onChange={(e) => {
                    setLangguage(e.target.value);
                  }}
                >
                  <option>C</option>
                  <option>C++ 14</option>
                  <option>Java 8</option>
                  <option>Ruby</option>
                  <option>Python 3</option>
                  <option>Kotlin</option>
                </select>
              </div>
              <div
                className="output-input"
                style={{
                  clear: "both",
                  height: "40%",
                  backgroundColor: "#272822",
                }}
              >
                <div
                  className="input"
                  style={{ float: "left", width: "46%", marginLeft: "20px" }}
                >
                  <label style={{ color: "white" }}>Input</label>
                  <br />
                  <textarea
                    rows="7"
                    className="form-control"
                    id="in"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                    value={input}
                    onChange={(e) => {
                      setInput(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div
                  className="output"
                  id="out"
                  style={{ float: "right", width: "46%", marginRight: "20px" }}
                >
                  <p hidden id="load">
                    Loading...
                  </p>
                  <label style={{ color: "white" }}>Output</label>
                  <br />
                  <textarea
                    rows="7"
                    className="form-control"
                    id="outId"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                    readOnly
                    value={output}
                    onChange={(e) => setOutput(e.target.value)}
                  ></textarea>
                  <div className="loader" style={{ display: "none" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return n1;
};

export default ReadProblem;
