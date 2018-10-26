import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux"; // This connects to our store

class Dashboard extends Component {
  state = {};

  render() {
    console.log(this.props);
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(Dashboard);
//connect is a function which returns a HOC (Higher Order Component) to take in the dashboard.
//pass mapStateToProps to connect, so the connect func knows what to connect to and what data to get from the store
