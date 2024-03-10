import "../assets/css/index_profile.css";
import { Link } from "react-router-dom";

const Navv = () => {
  const n1 = (
    <>
      <nav>
        <div className="btn-group">
          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Small button
          </button>
          <ul className="dropdown-menu">...</ul>
        </div>
        <div className="btn-group">
          <button className="btn btn-secondary btn-sm" type="button">
            Small split button
          </button>
          <button
            type="button"
            className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">...</ul>
        </div>
      </nav>
    </>
  );
  return n1;
};

export default Navv;
