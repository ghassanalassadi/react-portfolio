import React from "react";

function About() {
    return (
        <div>
            <h1 className="heading">About Me</h1>
            <div className="my-img">
                <img src={require("../assets/my_photo.jpg")} alt="me"></img>
            </div>
            <p>
                Hello, My name is Ghassan and I am working towards becoming a full-stack web developer. I am currently enrolled in an online Coding Bootcamp with University of Sydney and Trilogy Education Services.
                In this bootcamp I have studied various topics surrounding HTML5, CSS and JavaScript and I am looking to furthering my skills by putting them into practice in the web development field.
            </p>
        </div>
    )
};

export default About;