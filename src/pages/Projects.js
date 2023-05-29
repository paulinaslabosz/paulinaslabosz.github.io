import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { Title, List } from './Projects.styles';
function Projects() {
  const [projects, setProjects] = useState([]);
  const api = 'https://api.github.com/users/paulinaslabosz/repos?sort=created';

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, [projects]);

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

  return (
    <>
      <Title>Projects</Title>
      <List>{projectsList}</List>
    </>
  );
}

export default Projects;
