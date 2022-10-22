import React from "react";
import Card from "react-bootstrap/Card";
import portfolioData from '../portfolioData.json';


function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id}>
                            {data.projects && data.projects.map(projectData => {
                                return (
                                    <div key={projectData.id}>
                                        <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={projectData.img} className='card-img'/>
                                        <Card.Body>
                                            <Card.Title><strong>{projectData.title}</strong></Card.Title>
                                            <Card.Link href={projectData.github}>GitHub</Card.Link>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
        </div>
    )
};

export default Portfolio;