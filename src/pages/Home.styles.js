import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90%;
  width: 100%;
  margin: 0 20px;
`;
export const Description = styled.div`
  text-align: center;
`;

export const Image = styled.div`
  & > img {
    width: 300px;
    border-radius: 40px;
    border: 2px solid ${({ theme }) => theme.colors.darkGold};
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: normal;
  letter-spacing: 4px;
  margin: 0 0 15px 0;
`;

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

export const Position = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: lighter;
`;
