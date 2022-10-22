import React from "react";
import portfolioData from '../portfolioData.json';

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
                                    data.skills && data.skills.map(tech => {
                                        return (
                                            <div key={tech.id} className='d-flex justify-content-center align-items-center'>
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
                    <h4 className='d-flex justify-content-center align-items-center'>Download my Resume</h4>
                </a>
            </div>
        </div>
    )
};

export default Resume;