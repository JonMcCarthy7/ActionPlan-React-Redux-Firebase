import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  if (projects) {
    const projectList = projects.map(project => {
      return <ProjectSummary project={project} key={project.id} />;
    });
    return (
      <div className="project-list section">
        {projectList.length !== 0 ? projectList : <h1>No Projects Yet</h1>}
      </div>
    );
  } else {
    return <div>Loading sooonn</div>;
  }
};

export default ProjectList;
