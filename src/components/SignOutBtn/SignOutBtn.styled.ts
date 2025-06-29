import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  height: 100%;
  min-width: 100px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  background-color: ${({ theme }) => theme.colors.redLight};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
