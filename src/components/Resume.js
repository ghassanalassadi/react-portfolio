import React from "react";

function Resume() {
    return (
        <div>
            <h1 className="heading">My Resume</h1>
            <div className="resume">
                <h3>Front-End Skills</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
                <h3>Back-End Skills</h3>
                <ul>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
                <h3>Other Technical Skills</h3>
                <ul>
                    <li>Git</li>
                    <li>Visual Studio Code</li>
                </ul>
            </div>
            <div>
                <a href="../assets/Ghassan Al Assadi (Resume).pdf" download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
        </div>
    )
};

export default Resume;