import { FC } from 'react';
import {
  List,
  Container,
  ListItem,
  Label,
  Name,
  StyledNavLink,
} from './ChatsList.styled';
import { IProps } from './ChatsList.types';

const ChatsList: FC<IProps> = ({ chats }) => {
  return (
    <List>
      {chats.map(({ id, name, type }) => (
        <ListItem key={id}>
          <StyledNavLink to={String(id)}>
            <Container>
              <Name>{name}</Name>
              <Label type={type}>{type}</Label>
            </Container>
          </StyledNavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatsList;
