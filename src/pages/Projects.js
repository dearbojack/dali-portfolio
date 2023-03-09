import React from 'react';
import { Card } from 'react-bootstrap';

function Project(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Link href={props.link}>View project &rarr;</Card.Link>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of the projects I have worked on:</p>
      <Project
        title="Project 1"
        description="This is a description of my project 1"
        link="https://github.com/example/project1"
      />
      <Project
        title="Project 2"
        description="This is a description of my project 2"
        link="https://github.com/example/project2"
      />
      <Project
        title="Project 3"
        description="This is a description of my project 3"
        link="https://github.com/example/project3"
      />
    </div>
  );
}

export default Projects;