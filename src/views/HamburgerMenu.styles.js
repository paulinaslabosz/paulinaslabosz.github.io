import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HamIcon = styled.svg`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.almond};
  cursor: pointer;
`;
