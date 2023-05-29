import React from 'react';
import img from '../assets/Pola.jpeg';
import { Wrapper, Description, Image, Title, Name, Position } from './Home.styles';
function Home() {
  return (
    <Wrapper>
      <Description>
        <Title>Hello!</Title>
        <Name>I'm Paulina</Name>
        <Name>
          <strong>Słabosz</strong>
        </Name>
        <Position>Frontend Developer</Position>
      </Description>
      <Image>
        {' '}
        <img src={img} alt="Pola's photo" />
      </Image>
    </Wrapper>
  );
}

export default Home;
