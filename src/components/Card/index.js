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

function Card({ commit }) {
  console.log(commit);
  return (
    <div className="card px-4 my-4 shadow">
      <div className="card-body">
        <div className="card___top text-info">
          <div className="date col-md-2">
            <FaCalendarAlt />
            &nbsp;{commit.commit.author.date.split("T")[0]}
          </div>
          <div className="hash col-md-8 text-center">
            <a href={commit.html_url} target="_blank">
              <FaSlackHash /> &nbsp;{commit?.sha}
            </a>
          </div>
          <div className="commiter col-md-2">
            <FaUserNinja /> &nbsp;{commit.author?.login}
          </div>
        </div>
        <div className="my-4">
          <div className="row">
            <div className="col-md-12 commit-name">
              <RiCodeSSlashLine className="code-icon" />
              &nbsp;{commit?.commit?.message}
            </div>
          </div>
        </div>
        <div className="card___bottom">
          <div className="time">
            <AiOutlineClockCircle />
            &nbsp;{commit.commit.author.date.split("T")[1].replace("Z", "")}
          </div>

          <div className="files">
            <a href={commit?.comments_url} target="_blank">
              <AiOutlinePlusSquare /> &nbsp; {commit?.commit?.comment_count}{" "}
              comments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
