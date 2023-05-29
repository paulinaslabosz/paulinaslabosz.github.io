import React from 'react';
import { Title, Email, List, Item } from './Contact.styles';
import linkedin from '../assets/linkedinIcon.svg';
import github from '../assets/githubIcon.svg';
function Contact() {
  return (
    <>
      <Title>Contact</Title>
      <Email>
        E-mail: <a href="mailto:pslabosz2@gmail.com">pslabosz2@gmail.com</a>
      </Email>

      <List>
        <Item>
          <a href="https://github.com/paulinaslabosz">
            <span>Github</span>
            <img src={github} alt="Github icon - link" />
          </a>
        </Item>
        <Item>
          <a href="https://www.linkedin.com/in/paulina-slabosz/">
            <span>LinkedIn</span>
            <img src={linkedin} alt="Linkedin icon - link" />
          </a>
        </Item>
      </List>
    </>
  );
}

export default Contact;
