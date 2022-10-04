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
            <h1 className="heading">My Portfolio</h1>
            <ul className="flex-row">
                <li>
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Note Taker</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/note-taker' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                <Card.Link href="https://note-taker-by-ghassan.herokuapp.com/notes" target='_blank' rel="noopener noreferrer">Deployed App</Card.Link>
                            </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/note-taker.png`)}
                                    className='card-img'
                                />
                        </Card>
                </li>
                <li>
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Password Generator</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/password-generator' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                <Card.Link href="https://ghassanalassadi.github.io/password-generator/" target='_blank' rel="noopener noreferrer">Deployed App</Card.Link>
                            </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/password_generator.png`)}
                                    className='card-img'
                                />
                        </Card>
                </li>
            </ul>
            <ul className="flex-row">
                <li>
                    
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Professional README Generator</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/professional-readme-generator' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                Back-End Application
                            </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/professional_readme_generator.png`)}
                                    className='card-img'
                                />
                        </Card>
                </li>
                <li>
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Text Editor</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/text-editor' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                <Card.Link href="https://jate-text-editor-ghassan.herokuapp.com/" target='_blank' rel="noopener noreferrer">Deployed App</Card.Link>
                            </Card.Body>
                            <a href='https://github.com/ghassanalassadi/text-editor' target='_blank' rel="noopener noreferrer">
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/text_editor.png`)}
                                    className='card-img'
                                />
                            </a>
                        </Card>
                </li>
            </ul>
            <ul className="flex-row">
                <li>
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Weather Dashboard</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/weather-dashboard' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                <Card.Link href="https://ghassanalassadi.github.io/weather-dashboard/" target='_blank' rel="noopener noreferrer">Deployed App</Card.Link>
                            </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/weather_dashboard.png`)}
                                    className='card-img'
                                />
                        </Card>
                </li>
                <li>
                        <Card style={{width: "18rem"}}>
                            <Card.Body>
                                <Card.Title className='card-title'>Word Day Scheduler</Card.Title>
                                <Card.Link href='https://github.com/ghassanalassadi/work-day-scheduler' target='_blank' rel="noopener noreferrer">GitHub</Card.Link>
                                <br></br>
                                <Card.Link href="https://ghassanalassadi.github.io/work-day-scheduler/" target='_blank' rel="noopener noreferrer">Deployed App</Card.Link>
                            </Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={require(`../assets/work_day_scheduler.png`)}
                                    className='card-img'
                                />
                        </Card>
                </li>
            </ul>
        </div>
    );

};

export default Portfolio;