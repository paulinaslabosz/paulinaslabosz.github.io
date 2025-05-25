import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const HamIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.almond};
  cursor: pointer;
  z-index: 1;
`;

export const HamList = styled.ul`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
  transition: all 0.6s ease;
  flex-direction: column;
  display: flex;
  position: fixed;
  top: 6rem;
  margin-top: 0;
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.almond};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: lighter;
`;
