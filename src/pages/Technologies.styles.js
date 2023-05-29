import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin-bottom: 50px;
`;

export const WrapperIcon = styled.ul`
  list-style: none;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const Icon = styled.li`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > p {
    text-align: center;
  }
`;
