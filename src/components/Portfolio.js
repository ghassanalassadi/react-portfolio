import React from "react";
import Card from "react-bootstrap/Card";
import portfolioData from '../portfolioData.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Portfolio() {
    return (
        <div id="portfolio">
            <h1  className='d-flex justify-content-center align-items-center'>Portfolio</h1>
            <Container  className='d-flex justify-content-center align-items-center'>
            <Row xs={3}>
                {
                portfolioData && portfolioData.map( data => {
                    return (
                        <div key={data.id}>
                            
                            {data.projects && data.projects.map(projectData => {
                                return (
                                    <div key={projectData.id}>
                                        <Col sm={8} md={6} className='mt-4 mr-4 flex-wrap'>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title><strong>{projectData.title}</strong></Card.Title>
                                                    <Card.Link href={projectData.github}>GitHub</Card.Link>
                                                </Card.Body>
                                                <Card.Img variant="top" src={process.env.PUBLIC_URL + projectData.img} className='card-img'/>
                                            </Card>
                                        </Col>
                                    </div>
                                )
                            })}
                            
                        </div>
                    )
                })
                }
            </Row>
            </Container>
        </div>
    )
};

export default Portfolio;