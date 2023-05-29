import React from 'react';
import { Item, Title, Description, Technologies, Button, Buttons } from './Project.styles';

function Project(props) {
  let technologies = props.topics.join(' | ');

  return (
    <Item key={props.id}>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <Technologies>{technologies}</Technologies>
      <Buttons>
        <Button href={props.html} target="_blank">
          Code
        </Button>
        <Button href={props.homepage} target="_blank">
          Demo
        </Button>
      </Buttons>
    </Item>
  );
}

export default Project;
