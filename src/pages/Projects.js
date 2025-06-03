import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { Title, List } from './Projects.styles';
import projects from '../assets/repos.json';

function Projects() {
  const projectsList = projects.map((project) => (
    <Project
      key={project.id}
      id={project.id}
      name={project.name}
      description={project.description}
      topics={project.topics}
      html={project.html_url}
      homepage={project.homepage}
    />
  ));

  console.log(projects);
  return (
    <>
      <Title>Projects</Title>
      <List>{projectsList}</List>
    </>
  );
}

export default Projects;
