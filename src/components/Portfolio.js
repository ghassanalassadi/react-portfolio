import React from "react";
// import Project from "./Project";
import Card from "react-bootstrap/Card";


function Portfolio() {
    // const projects = [
    //     {
    //         title: 'Password Generator',
    //         img: '../assets/password_generator.png',
    //         github: 'https://github.com/ghassanalassadi/password-generator'
    //     },
    //     {
    //         title: 'Professional README Generator',
    //         img: '../assets/professional_readme_generator.png',
    //         github: 'https://github.com/ghassanalassadi/professional-readme-generator'
    //     },
    //     {
    //         title: 'Work Day Scheduler',
    //         img: '../assets/work_day_scheduler.png',
    //         github: 'https://github.com/ghassanalassadi/work-day-scheduler'
    //     },
    //     {
    //         title: 'Note Taker',
    //         img: '../assets/note-taker.png',
    //         github: 'https://github.com/ghassanalassadi/note-taker'
    //     },
    //     {
    //         title: 'Weather Dashboard',
    //         img: '../assets/weather_dashboard.png',
    //         github: 'https://github.com/ghassanalassadi/weather-dashboard'
    //     },
    //     {
    //         title: 'Text Editor',
    //         img: '../assets/text_editor.png',
    //         github: 'https://github.com/ghassanalassadi/text-editor'
    //     }
    // ]

    return (
        <div>
            <ul>
                <li>
                    <a href='https://github.com/ghassanalassadi/note-taker' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/note-taker.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Note Taker</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ghassanalassadi/password-generator' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/password_generator.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Password Generator</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ghassanalassadi/professional-readme-generator' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/professional_readme_generator.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Professional README Generator</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ghassanalassadi/text-editor' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/text_editor.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Text Editor</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ghassanalassadi/weather-dashboard' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/weather_dashboard.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Weather Dashboard</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/ghassanalassadi/work-day-scheduler' target='_blank' rel="noopener noreferrer">
                        <Card style={{width: "18rem"}}>
                            <Card.Img
                                variant="top"
                                src={require(`../assets/work_day_scheduler.png`)}
                                className='card-img'
                            />
                            <Card.Body>
                                <Card.Title className='card-title'>Word Day Scheduler</Card.Title>
                            </Card.Body>
                        </Card>
                    </a>
                </li>
            </ul>
        </div>
    );

};

export default Portfolio;