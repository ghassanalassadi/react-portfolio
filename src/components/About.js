import React from "react";
import portfolioData from "../portfolioData.json";

function About() {
    return (
        <div>
            <h1 className="heading">About Me</h1>
            {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id}>
                            <div className="my-img">
                                <img src={data.myImage} alt="me" />
                            </div>
                            <p>
                                {data.bio}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default About;