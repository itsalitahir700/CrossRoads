import React from "react";
import "./SearchBar.css";
import { BiSearchAlt } from "react-icons/all";

function SearchBar({ search }) {
  return (
    <div className="navbar bg-secondary text-white d-flex justify-content-end">
      <div className="d-flex">
        <div className="col-md-8">
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
