import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  align-self: flex-start;
  display: inline-block;
  min-width: 200px;
  padding: ${({ theme }) => theme.spacing(5)}px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 500;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.greyLight};
  }
`;
