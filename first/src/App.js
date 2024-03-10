import Login from "./login";
import Main from "./main";
import Profile from "./index_profile";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Prob from "./problems";
import User from "./users";
import ContestPage from "./contest_page";
import ContestRanks from "./ranks";
import CreateContest from "./createContest";
import ManageContest from "./manageContest";
import EditContest from "./editContest";
import ReadProblem from "./readProblem";
import ContestProblem from "./contestProblem";
import ShowContestProblem from "./showContestProblem";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/:id" element={<Profile />}></Route>
          <Route exact path="/:id/problems" element={<Prob />}></Route>
          <Route exact path="/:id/users" element={<User />}></Route>
          <Route
            exact
            path="/:id/contestPage"
            element={<ContestPage />}
          ></Route>
          <Route
            exact
            path="/:id/:contestName/ranks"
            element={<ContestRanks />}
          ></Route>
          <Route
            exact
            path="/:id/createContest"
            element={<CreateContest />}
          ></Route>
          <Route
            exact
            path="/:id/manageContest"
            element={<ManageContest />}
          ></Route>
          <Route
            exact
            path="/:id/:contestId/editContest"
            element={<EditContest />}
          ></Route>
          <Route
            exact
            path="/:id/:questionId/:contestId/showcontestQuestion"
            element={<ShowContestProblem />}
          ></Route>
          <Route
            exact
            path="/:id/:questionId/showQuestion"
            element={<ReadProblem />}
          ></Route>
          <Route
            exact
            path="/:id/:contest_id/contestProblem"
            element={<ContestProblem />}
          ></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
