import styled from 'styled-components';
import backgroundPhoto from '../assets/background.jpg';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundPhoto});
  background-position: center;
  background-size: cover;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;
