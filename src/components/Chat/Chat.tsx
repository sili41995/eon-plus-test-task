import { FC } from 'react';
import { useDynamicParam } from '@/hooks';
import { IProps } from './Chat.types';
import { List, Container, ListItem, Name, Text } from './Chat.styled';

const Chat: FC<IProps> = ({ messages }) => {
  const chatId = useDynamicParam();

  return (
    <List>
      {messages.map(({ id, sender_id: senderId, text }) => {
        const isCurrentUser = senderId === Number(chatId);

        return (
          <ListItem key={id} isCurrentUser={isCurrentUser}>
            <Container isCurrentUser={isCurrentUser}>
              <Name>{senderId}</Name>
              <Text>{text}</Text>
            </Container>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Chat;
