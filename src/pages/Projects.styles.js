import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  align-items: center;
  list-style: none;
  padding: 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.lightGrey};
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.darkGrey};
    border-radius: 10px;
  }
`;
