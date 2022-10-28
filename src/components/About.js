import React from "react";
import portfolioData from "../portfolioData.json";

function About() {
    return (
        <div id="about" className="about">
            <h1 className="heading">About Me</h1>
            {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id}>
                            <div className="my-img">
                                <img src={process.env.PUBLIC_URL + data.myImage} alt="me" />
                            </div>
                            <p>
                                Hello, My name is Ghassan and I welcome you to my page! I am a Metal Engineer currently looking to change careers into Software Engineering.
                                To do this, I am working towards becoming a full-stack web developer. I have recently finished an online Coding Bootcamp with University of Sydney and Trilogy Education Services.
                                In this bootcamp I have studied various topics surrounding full-stack web development such as HTML5, CSS, JavaScript and SQL. Currently, I am looking for a job in the field
                                so that I am able to further my skills by putting them into practice in the web development field, along with acquiring new ones.
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default About;