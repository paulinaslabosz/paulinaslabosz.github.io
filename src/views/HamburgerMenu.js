import { React, useState, useRef, useEffect } from 'react';
import { HamList, Item } from './HamburgerMenu.styles';
import { Wrapper, HamIcon } from './HamburgerMenu.styles';
import { useLocation } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!ref.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref, buttonRef]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Wrapper>
      <HamIcon onClick={() => setIsOpen(!isOpen)} width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </HamIcon>
      <HamList isOpen={isOpen}>
        <Item to="/">home</Item>
        <Item to="/about">about</Item>
        <Item to="/technologies">technologies</Item>
        <Item to="/projects">projects</Item>
        <Item to="/contact">contact</Item>
      </HamList>
    </Wrapper>
  );
}

export default HamburgerMenu;
