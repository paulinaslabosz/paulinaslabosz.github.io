import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin-bottom: 20px;
`;
export const Email = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.almond};
    &:hover {
      color: ${({ theme }) => theme.colors.darkGold};
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  column-gap: 40px;
  padding: 0;
`;
export const Item = styled.li`
  & > a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.almond};
    font-size: ${({ theme }) => theme.fontSize.m};
    display: flex;
    column-gap: 10px;
    & > span:hover {
      color: ${({ theme }) => theme.colors.darkGold};
    }
    & > img {
      width: 30px;
      display: inline;
    }
  }
`;
