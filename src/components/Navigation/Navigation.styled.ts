import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: block;
  min-width: 100px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc},
    color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus, .active) {
    color: #38b6ff;
    background-color: white;
  }
`;
