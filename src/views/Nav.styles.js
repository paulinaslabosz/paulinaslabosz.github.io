import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 12px 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.almond};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: lighter;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.almond};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &.active {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background-color: white;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
    }
  }
`;
