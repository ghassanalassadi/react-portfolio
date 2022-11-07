import React from "react";
import portfolioData from '../portfolioData.json';
import Button from "react-bootstrap/esm/Button";
import {saveAs} from 'file-saver';

function Resume() {
    const saveFile = () => {
        saveAs("./resume/Ghassan Al Assadi (Resume).pdf", "Ghassan Al Assadi (Resume).pdf");
    } 
    
    return (
        <div id="resume">
            <h1 className="heading d-flex justify-content-center align-items-center">My Resume</h1>
            <h2 className="heading d-flex justify-content-center align-items-center">My Tech Stack:</h2>
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
                    <Button variant="flat" className="resume-button" onClick={saveFile}>
                        Download my Resume
                    </Button>
            </div>
        </div>
    )
};

export default Resume;