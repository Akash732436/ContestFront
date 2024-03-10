import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./includes/nav";
import "./assets/css/index_profile.css";
import ContestPast from "./contest_past";
import ContestPresent from "./contest_present";
import { useParams } from "react-router-dom";
import ContestFuture from "./contest_future";

const ContestPage = () => {
  const { id } = useParams();
  let [past, setPast] = useState(" ");
  let [present, setPresent] = useState(" ");
  let [future, setFuture] = useState(" ");
  const n1 = (
    <>
      <Nav />
      <br/>
      <br/>
      <br/>
      <ContestPresent id={id} />
      <ContestPast id={id} />
      <ContestFuture id={id} />
    </>
  );
  return n1;
};

export default ContestPage;
