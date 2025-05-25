import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  font-weight: lighter;
`;
