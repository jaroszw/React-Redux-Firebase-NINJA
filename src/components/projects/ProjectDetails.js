import React from "react";

export const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-detail">
      <div className="card z-depth-0">
        <div className="div-card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            mollitia nam quod tempore excepturi perferendis eum harum nisi nulla
            maxime?
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The Net Ninja</div>
            <div>2nd Septtember, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
