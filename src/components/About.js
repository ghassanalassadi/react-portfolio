import React from "react";

function About() {
    return (
        <div>
            <h1>About Me</h1>
            <img src={require("../assets/my_photo.jpg")} alt="me"></img>
            <p>
                Hello, My name is Ghassan and I am working towards becoming a full-stack web developer. I am currently enrolled in an online Coding Bootcamp with University of Sydney and Trilogy Education Services.
            </p>
        </div>
    )
};

export default About;