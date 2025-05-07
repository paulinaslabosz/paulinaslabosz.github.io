import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { Title, List } from './Projects.styles';
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const api_path = 'https://api.github.com/users/paulinaslabosz/repos?sort=created';

  const cacheKey = 'reposCache';
  const cacheTime = 1000 * 60 * 10;

  const getProjects = async () => {
    const cached = JSON.parse(localStorage.getItem(cacheKey));
    const timeNow = Date.now();
    if (cached && timeNow - cached.timestamp < cacheTime) {
      setProjects(cached.data);
      setLoading(false);
      return;
    }
    const response = await fetch(api_path);
    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify({ data, timestamp: timeNow }));
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  console.log(localStorage);
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
