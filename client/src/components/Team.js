import React from "react";

const Team = () => {
  return (
    <section className="team-section">
      <img src="images/team-shape.png" alt="" className="team-shape" />
      <div className="container">
        <div className="section-title">
          <h3 className="h3">Team</h3>
          <h2>
            Perspiciatis Unde Omnis Iste <br />
            Natus Error Sit Voluptate
          </h2>
        </div>
        <a href="/#" className="default-button">
          <i className="fab fa-github-alt first-icon"></i>
          Github Source Code
        </a>
      </div>
    </section>
  );
};

export default Team;
