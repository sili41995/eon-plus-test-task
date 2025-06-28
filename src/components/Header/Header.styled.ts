import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
  padding-bottom: ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
