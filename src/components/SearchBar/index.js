import React from "react";
import "./SearchBar.css";
import { BiSearchAlt } from "react-icons/all";

function SearchBar({ search }) {
  return (
    <div className="navbar bg-secondary text-white d-flex ">
      <div className="navbar-brand font-weight-bold ">gitHistory</div>
      <div className="d-flex">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <BiSearchAlt />
            </span>
          </div>
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            className="form-control "
            placeholder="Commit Hash"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
