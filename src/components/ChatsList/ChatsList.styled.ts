import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { setLabelBgColor } from '@/utils';
import { IStyledLabelProps } from './ChatsList.types';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  border-radius: 10px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Container = styled.span`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(5)}px;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 500;
`;

export const Label = styled.span<IStyledLabelProps>`
  position: absolute;
  right: 6px;
  top: 6px;
  display: block;
  border-radius: 6px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: ${({ type }) => setLabelBgColor(type)};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;
