import styled from '@emotion/styled';
import { IStyledListItemProps, IStyledContainerProps } from './Chat.types';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const ListItem = styled.li<IStyledListItemProps>`
  align-self: ${({ isCurrentUser }) => isCurrentUser && 'flex-end'};
  max-width: 70vw;
`;

export const Container = styled.div<IStyledContainerProps>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding: ${({ theme }) => theme.spacing(5)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  background-color: ${({ isCurrentUser, theme }) =>
    isCurrentUser && theme.colors.primary};
`;

export const Name = styled.p``;

export const Text = styled.p``;
