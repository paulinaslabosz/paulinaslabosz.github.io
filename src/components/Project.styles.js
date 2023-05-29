import styled from 'styled-components';

export const Item = styled.li`
  border: 2px dashed ${({ theme }) => theme.colors.darkGold};
  padding: 12px;
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  width: 60%;
  margin: auto;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.almond};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: lighter;
  flex-grow: 1;
`;
export const Technologies = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  position: relative;
  bottom: 0;
`;
export const Button = styled.a`
  color: ${({ theme }) => theme.colors.almond};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.almond};
  padding: 4px;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${({ theme }) => theme.colors.darkGold};
    border: 1px solid ${({ theme }) => theme.colors.darkGold};
    border-radius: 10px;
  }
`;
