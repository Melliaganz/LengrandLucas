import React, { useState } from 'react';
import { Card, Container, Row, Col, Pagination, Button } from 'react-bootstrap';
import projects from '../data/projects';
import { FaGithub, FaPlay } from "react-icons/fa";
const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Pagination logic
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container style={{ marginTop: '50px', marginBottom: '50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Card
        style={{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          flexDirection:'column',
          padding: '25px',
          borderRadius: '25px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          color: 'white',
          maxWidth:'100%'
        }}
      >
        <Card.Header style={{ textAlign: 'center', marginBottom: 50}}>
          <h1>Mes Projets</h1>
        </Card.Header>

        <Card.Body>
          <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap:50 }}>
            {currentProjects.map((project, index) => (
              <Col key={index} md={6} lg={6}>
                <Card
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    color: 'white',
                    textAlign: 'center',
                    padding: 50,
                    maxWidth: 500,
                    height:350,
                  }}
                >
                  <Card.Img
                    variant="center"
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: 100,
                      objectFit: 'contain',
                      borderRadius: 25,
                    }}
                  />
                  <Card.Body
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Card.Title style={{margin: 20}}>{project.title}</Card.Title>
                    <Card.Text style={{ maxWidth: '50%', margin:20, }}>{project.description}</Card.Text>
                    <Card.Footer
                      style={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        minWidth: '50%',
                        justifyContent: 'center',
                        alignItems:'center'
                      }}
                    >
                      <div>
                        {project.liveLink && (
                          <Button
                            style={{
                              backgroundColor: 'transparent',
                              textDecoration: 'none',
                              border: 'none',
                              padding: 12,
                            }}
                          >
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Voir le projet"
                              style={{ color: 'white' }}
                            >
                              <FaPlay style={{fontSize:50}} />                            
                            </a>
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button
                            style={{
                              backgroundColor: 'transparent',
                              textDecoration: 'none',
                              border: 'none',
                              padding: 12,
                              margin: 10,
                            }}
                          >
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Voir le Github"
                              style={{ color: 'white' }}
                            >
                             <FaGithub style={{fontSize:50}}/>
                            </a>
                          </Button>
                        )}
                      </div>
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>

        {/* Pagination */}
        <Card.Footer>
          <Pagination className="justify-content-center">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Précédent
            </Pagination.Prev>
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Suivant
            </Pagination.Next>
          </Pagination>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Projects;
