import { FC } from 'react';
import { List, Container, ListItem, Label, Name } from './ChatsList.styled';
import { IProps } from './ChatsList.types';
import { NavLink } from 'react-router-dom';

const ChatsList: FC<IProps> = ({ chats }) => {
  return (
    <List>
      {chats.map(({ id, name, type }) => (
        <ListItem key={id}>
          <NavLink to={String(id)}>
            <Container>
              <Name>{name}</Name>
              <Label>{type}</Label>
            </Container>
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatsList;
