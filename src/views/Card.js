import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper, Content } from './Card.styles';
import Nav from './Nav';
import Home from '../pages/Home';
import About from '../pages/About';
import Technologies from '../pages/Technologies';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

function Card() {
  return (
    <Wrapper>
      <Nav />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Content>
    </Wrapper>
  );
}

export default Card;
