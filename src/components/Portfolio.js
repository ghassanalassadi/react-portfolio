import React from "react";
import Card from "react-bootstrap/Card";
import portfolioData from '../portfolioData.json';
import Container from 'react-bootstrap/Container';

function Portfolio() {
    return (
        <div id="portfolio">
            <h1 className='d-flex justify-content-center align-items-center'>Portfolio</h1>
            <Container>
                {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id}>
                            {data.projects && data.projects.map((projectData, i) => {
                                return (
                                    <div className='projects' key={i}>
                                                <Card style={{ width: '18rem' }} className='project-grid'>
                                                <Card.Body>
                                                    <Card.Title><strong>{projectData.title}</strong></Card.Title>
                                                    <Card.Link href={projectData.github}>GitHub</Card.Link>
                                                </Card.Body>
                                                <Card.Img variant="top" src={process.env.PUBLIC_URL + projectData.img} className='card-img'/>
                                            </Card>
                                    </div>
                                )
                            })}
                            
                        </div>
                    )
                })
                }
            </Container>
        </div>
    )
};

export default Portfolio;