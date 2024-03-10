import Nav from "./includes/nav";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/create.css";
import ManagePresent from "./managePresent";
import ManageFuture from "./manageFuture";

const ManageContest = () => {
  const n1 = (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <ManagePresent />
      <ManageFuture />
    </>
  );
  return n1;
};

export default ManageContest;
