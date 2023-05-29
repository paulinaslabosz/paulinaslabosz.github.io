import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1150px;
  height: 670px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  opacity: 0.8;
  border: 4px solid ${({ theme }) => theme.colors.darkGold};
  padding: 24px;
  border-radius: 40px;
  z-index: 1;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90%;
  width: 100%;
`;
