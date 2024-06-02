import React from "react";
import './resume.css';

function ResumePage() {
    const proficiencies = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Git",
        "Responsive Design",
        "RESTful APIs"
    ];

    return (
        <section className="resume-section">
            <h1>Resume</h1>
            <div className="resume-content">
                <a href="./images/WebDev Resume.pdf" download className="resume-link">Download Resume</a>
                <h2>Proficiencies</h2>
                <ul className="proficiency-list">
                    {proficiencies.map((proficiency, index) => (
                        <li key={index}>{proficiency}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ResumePage;
