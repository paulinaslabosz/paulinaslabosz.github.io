import React from 'react';
import css from '../assets/TechnologiesIcons/css.svg';
import git from '../assets/TechnologiesIcons/git.svg';
import github from '../assets/TechnologiesIcons/github.svg';
import html from '../assets/TechnologiesIcons/html.svg';
import javascript from '../assets/TechnologiesIcons/javascript.svg';
import react from '../assets/TechnologiesIcons/react.svg';
import sass from '../assets/TechnologiesIcons/sass.svg';
import webpack from '../assets/TechnologiesIcons/webpack.svg';
import { Title, WrapperIcon, Icon } from './Technologies.styles';

function Technologies() {
  return (
    <>
      <Title>Technologies I use:</Title>
      <WrapperIcon>
        <Icon>
          <img src={javascript} alt="javascript icon" />
          <p>JavaScript</p>
        </Icon>

        <Icon>
          <img src={react} alt="react icon" />
          <p>React.js</p>
        </Icon>

        <Icon>
          <img src={html} alt="html icon" />
          <p>HTML</p>
        </Icon>

        <Icon>
          <img src={css} alt="css icon" />
          <p>CSS</p>
        </Icon>

        <Icon>
          <img src={sass} alt="sass icon" />
          <p>SASS</p>
        </Icon>

        <Icon>
          <img src={git} alt="git icon" />
          <p>GIT</p>
        </Icon>

        <Icon>
          <img src={github} alt="github icon" />
          <p>Github</p>
        </Icon>

        <Icon>
          <img src={webpack} alt="webpack icon" />
          <p>Webpack</p>
        </Icon>
      </WrapperIcon>
    </>
  );
}

export default Technologies;
