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
`;

export const HamList = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 0;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.almond};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: lighter;
`;
