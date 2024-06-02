import React from "react";
import './portfolio.css';

function PortfolioPage() {
  const projects = [
    {
      title: "PlayPoint",
      description:
        "Gaming community platform for discovering, reviewing, and discussing video games.",
      imageUrl: "./images/PlayPointMain.JPG",
      link: "https://playpoint.onrender.com/",
    },
    {
      title: "SoccerSphere HQ",
      description:
        "Soccer information app using API-Football and Geocode APIs to provide current club and venue details for top European leagues.",
      imageUrl: "./images/soccersphere.JPG",
      link: "https://moe1362.github.io/soccer-info/",
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather app that provides current and future weather forecasts in cities.",
      imageUrl: "./images/weatherMain.JPG",
      link: "https://alexcapilla.github.io/weather-dashboard/",
    },
  ];

  return (
    <section className="portfolio-section">
      <h1>Portfolio</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
