import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./assets/css/timer.css";
import ManageContest from "./manageContest";

const ManagePresent = (props) => {
  const id = props.id;
  var times = [];
  useEffect(() => {
    fetch(`http://localhost:3000/api/${id}/present`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        let s = "";
        if (data.length != 0) {
          data.forEach((element) => {
            let hr=parseInt(element["start_time"].substring(11 ,13));
            //console.log(hr);
            let mn=parseInt(element["start_time"].substring(14, 16));
            hr=(hr+5)%24;
            if((mn+30)>60) hr=hr+1;
            mn=(mn+30)%60;
            let hours=hr.toString();
            if(hr<10) hours="0"+hr.toString();
            let mins=mn.toString();
            if(mn<10) mins=mn.toString();
            element["start_time"] =
              element["start_time"].substring(0, 10) +
              " " +
              hr+":"+mn+":"+element["start_time"].substring(17,19);

              hr=parseInt(element["end_time"].substring(11 ,13));
              //console.log(hr);
              mn=parseInt(element["end_time"].substring(14, 16));
              hr=(hr+5)%24;
              if((mn+30)>60) hr=hr+1;
              mn=(mn+30)%60;
              hours=hr.toString();
              if(hr<10) hours="0"+hr.toString();
              mins=mn.toString();
              if(mn<10) mins=mn.toString();


              element["end_time"] =
              element["end_time"].substring(0, 10) +
              " " +
              hr+":"+mn+":"+element["end_time"].substring(17,19);
            var countDownDate = new Date(element["end_time"]).getTime();
            times.push(countDownDate);
            //console.log(countDownDate);

            s += `<tr>
                <td>
                    ${element["contest_name"]}
                </td>
                <td>
                    ${element["username"]}
                </td>
                <td>
                    ${element["start_time"]}
                </td>
                <td>
                    ${element["end_time"]}
                </td>
                <td id=timer${countDownDate} width="300px" class="times">
                    
                    
                </td>
                <td>
                
                <a href="/${id}/${element["contest_id"]}/editContest" class="register">EDIT</a>
                    
                </td>
            </tr>`;
          });
          document.getElementById("present").innerHTML = s;
        } else {
          document.getElementById("not").innerHTML =
            "<br/><h5 style={{allign:'center'}}>No running contests</h5>";
        }
      });
  }, []);

  const timer = setInterval(function () {
    if (times.length == 0) {
      clearInterval(timer);
    }
    var now = new Date().getTime();
    var i = 1;
    times.forEach((element) => {
      var diff = element - now;
      //console.log(diff)
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);
      document.getElementById(`timer${element}`).innerHTML =
        '<div><span class="days" >' +
        days +
        'days</span></div><div><span class="hours">' +
        hours +
        'hours</span></div><div><span class="minutes">' +
        minutes +
        'minutes</span></div><div><span class="seconds">' +
        seconds +
        "s</span></div>";
      if (diff < 0) {
        clearInterval(timer);

        document.getElementById(`timer${element}`).innerHTML =
          "ENDED REFRESH TO SEE RANKS";
      }
      i += 1;
    });
  }, 1000);
  const n1 = (
    <div className="container">
      <div className="present-contest mt-5">
        <br />
        <br />
        <br />
        <h4 className="text-danger">Running contest</h4>
        <div id="not">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Contest name</th>
                <th>Organizer</th>
                <th>Start time</th>
                <th>End time</th>
                <th>Ends in</th>
                <th>EDIT</th>
              </tr>
            </thead>
            <tbody id="present">
              <tr>
                <td>contest name</td>
                <td>organizer name</td>
                <td>start time</td>
                <td>end time</td>
                <td></td>
                <td>
                  <a
                    href="#"
                    style={{ color: "white", backgroundColor: "red" }}
                  >
                   EDIT
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return n1;
};

export default ManagePresent;