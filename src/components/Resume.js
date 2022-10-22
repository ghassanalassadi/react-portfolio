import React from "react";
import portfolioData from '../portfolioData.json';

function Resume() {
    return (
        <div>
            <h1 className="heading">My Resume</h1>
            <div className="resume">
                {
                    portfolioData && portfolioData.map(data => {
                        return (
                            <div key={data.id}>
                                {
                                    data.skills && data.skills.map(tech => {
                                        return (
                                            <div key={tech.id}>
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
            <div>
                <a href="../assets/Ghassan Al Assadi (Resume).pdf" download>
                    <h4>Download my Resume</h4>
                </a>
            </div>
        </div>
    )
};

export default Resume;