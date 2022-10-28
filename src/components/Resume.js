import React from "react";
import portfolioData from '../portfolioData.json';
import Button from "react-bootstrap/esm/Button";

function Resume() {
    return (
        <div id="resume">
            <h1 className="heading d-flex justify-content-center align-items-center">My Resume</h1>
            <div className="resume d-flex justify-content-center align-items-center">
                {
                    portfolioData && portfolioData.map(data => {
                        return (
                            <div key={data.id}>
                                {
                                    data.skills && data.skills.map((tech, i) => {
                                        return (
                                            <div key={i} className='d-flex justify-content-center align-items-center'>
                                                {tech.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className="resume-download">
                    <a href="../assets/Ghassan Al Assadi (Resume).pdf" download>
                    <Button variant="flat" className="resume-button">
                        Download my Resume
                    </Button>
                    </a>
            </div>
        </div>
    )
};

export default Resume;