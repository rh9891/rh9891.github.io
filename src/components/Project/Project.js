import React from "react";
import "project.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.project} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.project}
          </li>
          <li>
          <a href={props.deployed} class="btn btn-primary" id="deployButton">Deployed Application</a>
          </li>
          <li>
          <a href={props.repository} class="btn btn-primary" id="repositoryButton">Github Repository</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;