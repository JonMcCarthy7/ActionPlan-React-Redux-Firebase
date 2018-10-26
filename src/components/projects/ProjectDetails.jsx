import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="car-title">Project title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis enim illum sed quae. Sapiente blanditiis fugiat adipisci
            illo perspiciatis omnis quasi expedita voluptas eius, consequatur
            eveniet mollitia, repudiandae provident ipsum?
          </p>
        </div>
        <div className="card-action grey ligthen-4 white-text">
          <div>Posted By:</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
