import React from "react";
import Card from "react-bootstrap/Card";
import portfolioData from '../portfolioData.json';
import Button from 'react-bootstrap/Button'

function Portfolio() {
    return (
        <div id="portfolio">
            <h1 className='d-flex justify-content-center align-items-center'>Portfolio</h1>
                {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id} className='box'>
                            {data.projects && data.projects.map((projectData, i) => {
                                return (
                                    <div className='projects' key={i}>
                                                <Card style={{ width: '22rem' }} className='project-card'>
                                                <Card.Body>
                                                    <Card.Title className="card-title">{projectData.title}</Card.Title>
                                                    <Card.Link href={projectData.github}><Button variant='flat' className='project-button'>GitHub</Button></Card.Link>
                                                    <Card.Link href={projectData.demo}><Button variant='flat' className='project-button'>Demo</Button></Card.Link>
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
        </div>
    )
};

export default Portfolio;