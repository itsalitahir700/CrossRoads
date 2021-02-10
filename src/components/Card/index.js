import React from "react";
import {
  FaCalendarAlt,
  FaSlackHash,
  FaUserNinja,
  RiCodeSSlashLine,
  AiOutlineClockCircle,
  MdExpandMore,
  AiOutlinePlusSquare,
} from "react-icons/all";
import "./Card.css";

function Card() {
  return (
    <div className="card px-4 my-4 shadow">
      <div className="card-body">
        <div className="card___top text-info">
          <div className="date">
            <FaCalendarAlt />
            &nbsp;20-01-2021
          </div>
          <div className="hash">
            <FaSlackHash /> &nbsp;102121
          </div>
          <div className="commiter">
            <FaUserNinja /> &nbsp;Ali
          </div>
        </div>
        <div className="my-4">
          <div className="row">
            <div className="col-md-1">
              <RiCodeSSlashLine className="code-icon" />
            </div>
            <div className="col-md-11 commit-name">Commit name comes here</div>
          </div>
        </div>
        <div className="card___bottom">
          <div className="time">
            <AiOutlineClockCircle />
            &nbsp;2 days ago
          </div>

          <div className="more">
            <MdExpandMore />
          </div>

          <div className="files">
            <AiOutlinePlusSquare />
            &nbsp; 3 Files
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
